import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Project from './Project/Project';

import Contact from './Contact/Contact';
import Footer from './Home/Footer';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
