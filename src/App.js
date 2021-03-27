import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import CanvasArea from './components/CanvasArea';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>React Image Cropper</h1>
      <CanvasArea />
      <Footer />
    </div>
  );
}

export default App;
