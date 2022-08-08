import './App.css';

//Components  
import TextChanger from './components/TextChanger';
import Education from './components/Education';
import Work from './components/Work';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <TextChanger/>
      <Education/>
      <Work/>
      <Portfolio/>
    </div>
  );
}

export default App;
