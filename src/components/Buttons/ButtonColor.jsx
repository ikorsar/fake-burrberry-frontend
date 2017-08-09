import React from 'react';
import styled from 'styled-components';

const ButtonColor = styled.button`
  font-size: 0;
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  padding: 0;
  transition: border-color .25s ease-in-out;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isActive ? '#232122' : 'transparent')};
  border-radius: 50%;
`;

export default props =>
  (<ButtonColor type="button">
    {props.label}
  </ButtonColor>);
