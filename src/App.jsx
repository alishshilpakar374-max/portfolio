import { Navbar, Footer } from "./layout";
import {
  Hero,
  About,
  Projects,
  // TODO
  // Experiences,
  // Testimonials,
  Contact,
} from "./sections";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* TODO:Add these */}

        {/* <Experiences />
        <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
