import Header from '../components/Header';
import Preloader from '../components/Preloader';
import WhatsAppButton from '../components/WhatsAppButton';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Uptime from '../components/sections/Uptime';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Services from '../components/sections/Services';
import Faq from '../components/sections/Faq';
import Contact from '../components/sections/Contact';
import { schemaJson } from '../lib/schema';

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson() }} />
      <Preloader />
      <Header />
      <WhatsAppButton />
      <main>
        <Hero />
        <About />
        <Uptime />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Services />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
