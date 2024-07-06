import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* {hero sections} */}
      <Hero />
      {/* about me  */}
      <About />
      {/* skill sections */}
      <Skill/>
      {/* projects */}
      <Project/>
      {/* contact */}
      <Contact/>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
