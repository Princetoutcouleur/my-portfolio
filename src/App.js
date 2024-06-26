import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Techno from './components/Techno';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container">
      <Navigation/>
      <Header/>
      <Project/>
      <Techno/>
      <Footer/>
    </div>
  );
}

export default App;
