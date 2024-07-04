import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Skill from './components/Skill'
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
      {/* contact */}
      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
