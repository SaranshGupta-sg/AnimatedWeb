import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText); //this line make sure that both plugins are ready to use globally

const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  )
}

export default App
