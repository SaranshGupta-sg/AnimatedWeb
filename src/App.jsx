import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText); //this line make sure that both plugins are ready to use globally

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
