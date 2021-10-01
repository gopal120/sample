
import './App.css';
import Navbar from './Navbar/navbar';
import Section_one from './section/section_one';
import  Section_two from './section_two/section_two'
import Section_three from './section_three/section_three'
import Location from './location/location';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <Section_one />
      <Navbar />
      <Section_two /> 
      <Section_three />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
