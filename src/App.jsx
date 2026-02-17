import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import ExperienceAndEducation from "./components/ExperienceAndEducation";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative font-inter bg-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <ExperienceAndEducation />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
