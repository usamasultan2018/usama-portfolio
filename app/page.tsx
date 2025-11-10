import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import FeaturedProjects from '@/components/sections/featured-projects';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import Education from '@/components/sections/education';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}