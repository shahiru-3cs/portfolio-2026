'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

/*
  Black "ink bleed" layer drawn on a canvas.
  A noise field (organic blob + torn edge + grain) is built once per screen size;
  setProgress(0..1) burns a hole through the black from the centre outward.
*/

const RES = 0.5; // canvas resolution relative to CSS pixels

function hash(x, y) {
  let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

function vnoise(x, y) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi);
  const b = hash(xi + 1, yi);
  const c = hash(xi, yi + 1);
  const d = hash(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x, y, octaves) {
  let sum = 0;
  let amp = 0.5;
  let norm = 0;
  for (let o = 0; o < octaves; o++) {
    sum += vnoise(x, y) * amp;
    norm += amp;
    x = x * 2.03 + 17.1;
    y = y * 2.03 + 9.7;
    amp *= 0.5;
  }
  return sum / norm;
}

const ease = (t) => t * (2 - t);

const InkReveal = forwardRef(function InkReveal({ className = '' }, ref) {
  const canvas = useRef(null);
  const state = useRef({ field: null, img: null, w: 0, h: 0, fmin: 0, fmax: 1, last: -1, progress: 0 });

  const draw = (p) => {
    const s = state.current;
    const c = canvas.current;
    if (!c || !s.field) return;
    if (Math.abs(p - s.last) < 0.0008) return;
    s.last = p;
    const ctx = c.getContext('2d');

    if (p <= 0) {
      c.style.visibility = 'visible';
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, s.w, s.h);
      return;
    }
    if (p >= 1) {
      c.style.visibility = 'hidden';
      return;
    }
    c.style.visibility = 'visible';

    const e = ease(p);
    const span = s.fmax - s.fmin;
    const R = s.fmin + (span + 0.04) * e;
    const edge = 0.022 * (1 - e) + 0.004; // soft at first, tighter and more ragged as it spreads
    const data = s.img.data;
    const f = s.field;
    for (let i = 0, j = 3; i < f.length; i++, j += 4) {
      const t = (f[i] - R + edge) / edge;
      data[j] = t <= 0 ? 0 : t >= 1 ? 255 : t * 255;
    }
    ctx.putImageData(s.img, 0, 0);
  };

  useImperativeHandle(ref, () => ({
    setProgress(p) {
      state.current.progress = p;
      draw(p);
    },
  }));

  useEffect(() => {
    const c = canvas.current;
    const build = () => {
      const s = state.current;
      const w = Math.max(2, Math.round(c.clientWidth * RES));
      const h = Math.max(2, Math.round(c.clientHeight * RES));
      if (w === s.w && h === s.h && s.field) return;
      c.width = w;
      c.height = h;
      const S = Math.max(w, h);
      const field = new Float32Array(w * h);
      let fmin = Infinity;
      let fmax = -Infinity;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const nx = (x - w / 2) / S;
          const ny = (y - h / 2) / S;
          const d = Math.sqrt(nx * nx + ny * ny) / 0.6;
          // domain-warped low-frequency noise = organic, lopsided blob
          const warp = fbm(nx * 2.1 + 3.3, ny * 2.1 + 1.7, 2);
          const low = fbm(nx * 1.7 + warp * 0.9, ny * 1.7 + 7.2 + warp * 0.9, 3) - 0.5;
          // high-frequency noise = torn, paper-like edge
          const mid = fbm(nx * 6 + 40, ny * 6 + 40, 3) - 0.5;
          const fine = fbm(nx * 34 + 90, ny * 34 + 90, 2) - 0.5;
          const grain = hash(x, y) - 0.5;
          const v = d + low * 0.62 + mid * 0.16 + fine * 0.05 + grain * 0.004 - nx * 0.12;
          field[y * w + x] = v;
          if (v < fmin) fmin = v;
          if (v > fmax) fmax = v;
        }
      }
      const img = new ImageData(w, h); // rgb stays 0 (black); alpha set per frame
      Object.assign(s, { field, img, w, h, fmin, fmax, last: -1 });
      draw(s.progress);
    };
    build();
    let t;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(build, 150);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvas} className={className} aria-hidden="true" />;
});

export default InkReveal;
