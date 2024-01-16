// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    position: relative;
    bottom: auto;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Add your footer content here */}
      © 2024 Clean Pools Co. All Rights Reserved.
    </FooterContainer>
  );
};

export default Footer;
