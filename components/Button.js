import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button
  /* Common button styles */
  width: 357px;
  height: 78px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  color: #FFFFFF;

  /* Conditional styling based on the type prop */
  background-color: ${({ type }) => (type === 'accept' ? '#32AF1D' : '#000000')};
;

const Button = ({ children, onClick, type = 'accept', ...props }) => {
  return (
    <StyledButton onClick={onClick} type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
