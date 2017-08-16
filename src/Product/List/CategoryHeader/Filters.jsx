import React from 'react';
import styled from 'styled-components';
import arrow from '../../../Header/arrow.svg';

const Filters = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  margin-right: -.5rem;
`;

const Title = styled.h4`
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 400;
  margin: 0 2rem 0 0;
`;

const Container = styled.div`
  overflow-x: scroll;
  display: flex;
`;

const Filter = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  background-color: transparent;
  border: none;
  text-align: left;
  position: relative;
  display: flex;
  padding: 0;
  margin-right: 1rem;
  align-items: center;

  &::after {
    content: '';
    display: inline-block;
    background-image: url(${arrow});
    background-size: 12px 6px;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
  }
`;

export default () =>
  (<Filters>
    <Title>Refine by</Title>
    <Container>
      <Filter>Category</Filter>
      <Filter>Colour</Filter>
      <Filter>Size</Filter>
      <Filter>Sort by price</Filter>
    </Container>
  </Filters>);
