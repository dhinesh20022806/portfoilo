import {
  Navbar,
  Home,
  About,
  Skills,
  Projects,
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
      <Content />
      <Footer />
    </>
  );
}

export default App;
