import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
  
 
import NavbarContainer from './Componnent/Layout/Navbar/NavbarContainer';
import Footer from './Componnent/Layout/Footer';
import TeamListContainer from './Componnent/TeamList/TeamListContainer';
import LoginContainer from './Componnent/Login/LoginContainer';
import RagisterConatiner from './Componnent/Ragister/RagisterConatiner';

function App() {
    return (
        <>
        
        <Router>
        <NavbarContainer />
        <Routes>
        <Route exact path="/" element={<TeamListContainer />}></Route>
        <Route exact path="/login" element={<LoginContainer />}></Route>
        <Route exact path="/register" element={<RagisterConatiner />}></Route>
        </Routes>
        <Footer />
        </Router>
      </>
        
    )
}

export default App
