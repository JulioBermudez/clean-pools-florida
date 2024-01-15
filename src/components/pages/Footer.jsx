// Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
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
