import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <div className="App container">
      <Navigation/>
      <Header/>
    </div>
  );
}

export default App;
