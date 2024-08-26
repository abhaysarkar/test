import { useState } from 'react'
import './App.css'
import NavBar from '../src/components/NavBar.jsx'
import Main from '../src/components/Main.jsx'
import Page1 from '../src/components/Page1.jsx'
import Page2 from '../src/components/Page2.jsx'
import Page3 from '../src/components/Page3.jsx'
import Page4 from '../src/components/Page4.jsx'
import Page5 from '../src/components/Page5.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
