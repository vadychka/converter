import './App.css';
import Converter from './layouts/Converter/Converter';
import Header from './layouts/Header/Header';


function App() {

  return (
    <div className='wrapper'>
    <Header/>
    <Converter />
    </div>
  );
}

export default App;