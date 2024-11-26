// import './App.css';
// import Navbar from './components/Navbar';
// import Class_component from './components/Class_component';
// import Footer from './components/Footer';
// import FunctionalComponent from './components/FunctionalComponent';
// import Greeting_class from './components/Greeting_class';
// import NewComponent from './components/NewComponent';
// import Count from './components/Count';


// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <FunctionalComponent name="SriRaksha"/>
//       <FunctionalComponent name="Prajwal"/>
//       {/* <Greeting_class name="Pajju" age="23"/> */}
//       <NewComponent name="Pajju" age="22" dept="MCA"/>
//       <Count/>
      
//       {/* <Class_component/> */}
//       <Footer />

//     </div>
//   );
// }

// export default App;


import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountingFunction from './components/CountingFunction';
import Timer from './components/Timer';
// import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          {/* <Route path='/count' element={<Navbar/>}/> */}
          {/* <Route path='/count' element={<CountingFunction/>}/> */}
          <Route path='/count' element={<Timer/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}