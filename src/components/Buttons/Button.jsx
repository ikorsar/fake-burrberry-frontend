import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75em;
  line-height: .875rem;
  display: block;
  margin: 0 0 1rem;
  padding: 1rem 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  background-color: ${props => props.secondary ? "#171717" : "#fff"};
  color: ${props => props.secondary ? "#fff" : "#171717"};
  border-color: ${props => props.secondary ? "#171717" : "#999"};
`;

export default props => (
  <Button type="button">{props.label}</Button>
);