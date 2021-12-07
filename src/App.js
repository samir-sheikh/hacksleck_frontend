import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarContainer from './Componnent/Layout/Navbar/NavbarContainer';
import Footer from './Componnent/Layout/Footer';
import TeamListContainer from './Componnent/TeamList/TeamListContainer';

function App() {
    return (
        <>
       <Router>
           <NavbarContainer />
        <TeamListContainer />
           <Footer />
        </Router>
      
        </>
    )
}

export default App
