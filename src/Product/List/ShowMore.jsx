import React from 'react';
import styled from 'styled-components';

const ShowMore = styled.div`
  text-align: center;
  padding: 2rem 0 1rem;

  @media screen and (min-width: 48rem) {
    padding: 3rem 0 1.5rem;
  }
`;

const Showing = styled.h4`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  margin: 0 0 1rem;

  @media screen and (min-width: 48rem) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75em;
  line-height: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: 1px solid #171717;
  border-radius: 2px;
  background-color: #fff;
  color: #171717;
`;

export default () =>
  (<ShowMore>
    <Showing>Showing 8 of 17</Showing>
    <Button type="button">View 9 more</Button>
  </ShowMore>);
