import React from "react";
import styled from "styled-components";

const TitleBorder = styled.h2`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  position: relative;
  display: inline-block;
  margin: 0 0 1.5rem;
  padding-bottom: .5rem;
  text-transform: uppercase;
  color: #171717;
  border-bottom: 1px solid #171717;

  @media screen and (min-width: 48rem) {
    line-height: 19px;
    margin: 0 0 1rem;
  }
`;

export default props => (
  <TitleBorder>{props.label}</TitleBorder>
);