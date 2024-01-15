// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import React from 'react';
import styled from 'styled-components';
import Footer from './pages/Footer';

const IconLink = styled.a`
  margin: 0 10px;
  font-size: 30px;
  color: #007bff;
`;

const NavBar = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center; 
  padding: 15px;
  background-color: #f8f9fa;
`;

const Logo = styled.img`
  max-height: 100px;
  justify-content: flex;
  margin-right: 65%; 
  border-radius: 20%;
`;

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
    <NavBar>
      <Logo src="public/assets/images/logo.jpg" alt="clean pools florida Company Logo" />
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          // Check to see if the currentPage is `Project`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Services
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <div>
        <IconLink href="https://twitter.com/cleanpoolsco" target="_blank"><i class="fab fa-twitter"></i></IconLink>
        <IconLink href="https://instagram" target="_blank"><i class="fab fa-instagram"></i></IconLink>
        <IconLink href="https://facebook" target="_blank"><i class="fab fa-facebook"></i></IconLink>
      </div>
    </ul>
    </NavBar>
   {/* Add your page content here */}
      {/* ... (your existing code) */}
      <Footer />
    </>
  );
}

export default NavTabs;
