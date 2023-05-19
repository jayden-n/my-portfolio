import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NavBottom from './components/NavBottom';
import Skills from './components/Skills';
import Work from './components/Work';
import GoToTop from './components/GoToTop';

function App() {
  return (
    <div>
      <Navbar />
      <NavBottom />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <GoToTop />
    </div>
  );
}

export default App;
