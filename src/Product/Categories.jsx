import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Categories = styled.section`
  display: none;

  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;

const CategoryLink = styled(Link)`
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => (props.active ? '#171717' : '#999')};
  text-decoration: none;
  letter-spacing: 1.5px;
  padding: 0 1rem 1rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${props => (props.active ? '#171717' : 'transparent')};
`;

export default () =>
  (<Categories>
    <CategoryLink to="/products/women/">Women</CategoryLink>
    <CategoryLink to="/products/men/" active>
      Men
    </CategoryLink>
    <CategoryLink to="/products/children/">Children</CategoryLink>
    <CategoryLink to="/products/beauty/">Beauty</CategoryLink>
    <CategoryLink to="/products/experience/">Experience</CategoryLink>
  </Categories>);
