import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import CanvasArea from './components/CanvasArea';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CanvasArea />
      <Footer />
    </div>
  );
}

export default App;
