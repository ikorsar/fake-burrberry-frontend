import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
	font-size: 0;
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  padding: 0;
  transition: border-color .25s ease-in-out;
  border: 1px solid transparent;
  border-radius: 50%;
`;

export default () => (
  <Button type="button" />
);