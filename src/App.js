import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarContainer from './Componnent/Layout/Navbar/NavbarContainer';

function App() {
    return (
       <Router>
           <NavbarContainer />
        </Router>
    )
}

export default App
