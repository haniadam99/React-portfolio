import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import About from './routes/About'


function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element= {<Projects/>} />
      <Route path='About' element={<About/>}/>
      <Route path='/Contact' element= {<Contact/>} />
    </Routes>
    </>

    






  





  )
  
}

export default App;
