import {Routes, Route} from "react-router-dom";
import Accueil from './screens/Accueil'
import Header from './components/Header';
import Home from './screens/Home'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Accueil' element={<Accueil />} />
        </Routes>

    </div>
  );
}

export default App;
