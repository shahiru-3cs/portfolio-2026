'use client';

import PatternTile, { PALETTES } from './PatternTile';

/**
 * A tiny browser window with a fake UI inside, used as project artwork.
 * Everything is sized in `em`, so set font-size on the parent to scale it.
 * variant: hero | grid | columns | chart | table
 */
export function BrowserMock({ variant = 'hero', pattern = 'checker', palette = 'ember', dark = false, className = '', image = '', alt = '' }) {
  const [a, b] = PALETTES[palette] || PALETTES.ember;
  return (
    <div className={`bm bm--${variant} ${dark ? 'bm--dark' : ''} ${className}`} style={{ '--a': a, '--b': b }} aria-hidden="true">
      <div className="bm__bar">
        <i />
        <i />
        <i />
        <span className="bm__url" />
      </div>
      {image ? (
        <div className="bm__body bm__body--image">
          <img src={image} alt={alt || 'Project screenshot'} className="bm__image" loading="lazy" />
        </div>
      ) : (
        <div className="bm__body">
          {variant === 'hero' && (
            <>
              <div className="bm__hero">
                <PatternTile shape="wide" type={pattern} palette={palette} className="bm__fill" />
                <div className="bm__headline">
                  <b />
                  <b />
                  <span />
                </div>
              </div>
              <div className="bm__row">
                <span />
                <span />
                <span />
              </div>
            </>
          )}
          {variant === 'grid' && (
            <div className="bm__grid">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div className="bm__card" key={i}>
                  <PatternTile shape="wide" type={pattern} palette={palette} className="bm__thumb" />
                  <b />
                  <span />
                </div>
              ))}
            </div>
          )}
          {variant === 'columns' && (
            <div className="bm__cols">
              {[3, 2, 3].map((count, c) => (
                <div className="bm__col" key={c}>
                  <em />
                  {Array.from({ length: count }).map((_, i) => (
                    <div className="bm__task" key={i}>
                      <b />
                      <span />
                      <i />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {variant === 'chart' && (
            <div className="bm__chart">
              <div className="bm__big">
                <PatternTile shape="circle" type={pattern} palette={palette} className="bm__sun" />
                <strong>28°</strong>
              </div>
              <div className="bm__bars">
                {[40, 62, 55, 80, 68, 90, 58, 74].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="bm__days">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <span key={i} />
                ))}
              </div>
            </div>
          )}
          {variant === 'table' && (
            <div className="bm__table">
              <aside>
                <PatternTile shape="square" type={pattern} palette={palette} className="bm__logo" />
                <span />
                <span />
                <span />
                <span />
              </aside>
              <div className="bm__rows">
                <div className="bm__kpis">
                  <b />
                  <b />
                  <b />
                </div>
                {[0, 1, 2, 3, 4].map((i) => (
                  <div className="bm__tr" key={i}>
                    <span />
                    <span />
                    <i />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** Phone frame. Children render on the screen. */
export function Phone({ children, className = '', dark = false }) {
  return (
    <div className={`phone ${dark ? 'phone--dark' : ''} ${className}`}>
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <span className="phone__island" />
          <span className="phone__icons">
            <i />
            <i />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

/** MacBook frame. Children render on the screen. The lid opens with the CSS variable --o (0 closed, 1 open). */
export function MacBook({ children, className = '' }) {
  return (
    <div className={`mac ${className}`}>
      <div className="mac__lid">
        <span className="mac__notch" />
        <div className="mac__screen">{children}</div>
      </div>
      <div className="mac__base" />
      <div className="mac__shadow" />
    </div>
  );
}

/** "SR" monogram mark */
export function Mark({ initials, className = '' }) {
  return (
    <span className={`mark ${className}`} aria-hidden="true">
      {initials}
    </span>
  );
}
