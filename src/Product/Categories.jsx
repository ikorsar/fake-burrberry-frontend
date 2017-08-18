import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Categories = styled.section`
  display: none;

  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;

const Link = styled(NavLink)`
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
  text-transform: uppercase;
  color: #999;
  text-decoration: none;
  letter-spacing: 1.5px;
  padding: 0 1rem 1rem;
  border: 1px solid transparent;

  &.active {
    color: #171717;
    border-bottom-color: #171717;
  }
`;

export default () =>
  (<Categories>
    <Link to="/products/women/">Women</Link>
    <Link to="/products/men/">Men</Link>
    <Link to="/products/children/">Children</Link>
    <Link to="/products/beauty/">Beauty</Link>
    <Link to="/products/experience/">Experience</Link>
  </Categories>);
