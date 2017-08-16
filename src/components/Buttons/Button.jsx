import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75em;
  font-weight: ${props => (props.active ? 'bold' : '400')};
  line-height: .875rem;
  margin: 0 0 1rem;
  padding: ${props => (props.small ? '.5rem 1rem' : '1rem')};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  background-color: ${props => (props.secondary ? '#171717' : '#fff')};
  color: ${props => (props.secondary ? '#fff' : '#171717')};
  border-color: ${props => (props.secondary ? '#171717' : '#999')};

  @media screen and (min-width: 62rem) {
    background-color: ${props => (props.secondary ? '#171717' : 'transparent')};
    color: ${props => (props.secondary ? '#fff' : '#171717')};
    border-color: ${props => (props.secondary ? '#171717' : '#171717')};
  }
`;

export default function ButtonComponent(props) {
  return (
    <Button type={props.type} secondary={props.secondary} small={props.small} active={props.active}>
      {props.label}
    </Button>
  );
}

ButtonComponent.defaultProps = {
  secondary: false,
  small: false,
  active: false,
};

ButtonComponent.propTypes = {
  type: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
};
