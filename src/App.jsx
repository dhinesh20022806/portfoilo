import {
  Navbar,
  Home,
  About,
  Skills,
  Projects,
  WhyHire,
  Content,
  Footer,
} from "./components";

function App() {
  return (
    <>
      {/* navbar  */}
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <WhyHire />
      <Content />
      <Footer />
    </>
  );
}

export default App;
