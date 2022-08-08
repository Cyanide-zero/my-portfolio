import './App.css';

//Components  
import TextChanger from './components/TextChanger';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <TextChanger/>
      <About/>
      <Education/>
      <Work/>
      <Portfolio/>
    </div>
  );
}

export default App;
