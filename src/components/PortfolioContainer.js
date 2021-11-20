import React, { useState } from 'react';
import background from '../images/background.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    const renderPage = () => {
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <About />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className= "page-container">
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", minHeight: "75rem"}}>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        <div style={{position: "absolute", left: "0rem", bottom: "0rem", right: "0rem"}}>
        <Footer/>
        </div>
      </div>
      </div>
    );
  }
  