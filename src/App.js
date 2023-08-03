import { Route, Routes } from 'react-router-dom';
import Allrest from './Allrest/Allrest';
import './App.css';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import View from './ViewRest/View';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Header/>
       <Routes>
          {/* localhost://3000 -  all restaurent view */}
          <Route path='/' element={<Allrest/>} />
          <Route path='/view/:id' element={<View/>} />
        </Routes>
       <Allrest/>
       <Footer/>
      </header>
    </div>
  );
}

export default App;
