import React from 'react';
import styled from 'styled-components';
import arrow from '../../../images/arrow.svg';

const Filters = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  margin-right: -.5rem;
`;

const Wrapper = styled.div`
  overflow-x: scroll;
  display: flex;

  @media screen and (min-width: 48rem) {
    flex-basis: 100%;
    justify-content: flex-start;
    overflow-x: visible;
  }
`;

const Group = styled.div`
  display: flex;

  &:last-child {
    justify-self: flex-end;
    margin-left: auto;
    margin-right: .5rem;
  }
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
  padding: 1.5rem 1.25rem 1.5rem 0;
  margin-right: 1rem;
  align-items: center;

  &::after {
    content: '';
    display: block;
    background-image: url(${arrow});
    background-size: cover;
    width: .75rem;
    height: .375rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 48rem) {
    margin-right: 3rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default () =>
  (<Filters>
    <Wrapper>
      <Group>
        <Filter>Category</Filter>
        <Filter>Colour</Filter>
        <Filter>Size</Filter>
      </Group>
      <Group>
        <Filter>Sort by price</Filter>
      </Group>
    </Wrapper>
  </Filters>);
