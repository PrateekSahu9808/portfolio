import { WordsBanner } from './components/WordsBanner';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Scene } from './components/Scene';
import { StageShow } from './components/StageShow';

export default function App() {
  return (
    <main id="main">
      <StageShow>
        <Scene id="top">
          <Hero />
        </Scene>
        <Scene id="words">
          <WordsBanner />
        </Scene>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Scene id="end">
          <Footer />
        </Scene>
      </StageShow>
    </main>
  );
}
