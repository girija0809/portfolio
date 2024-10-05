import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Introduction from './Components/Introduction';
import Projects from './Components/Projects';

function App() {
  return (
    <div className='lg:mx-96 mx-4'> 
        <Navbar />
        <Hero />
        <Introduction />
        <Projects />
    </div>
  );
}

export default App;
