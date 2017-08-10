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
  background-color: ${props => props.bgColor};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.active ? '#232122' : 'transparent')};
  border-radius: 50%;
  cursor: ${props => (props.active ? 'default' : 'pointer')};
`;

export default props => (
  <ButtonColor type="button" bgColor={props.bgColorValue} active={props.active}>
    {props.label} color
    </ButtonColor>
  );
