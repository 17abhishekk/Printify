import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="w-full h-full absolute bg-white overflow-auto md:overflow-hidden from-green-400 ">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
