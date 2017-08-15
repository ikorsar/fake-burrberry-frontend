import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: .875rem;
  font-style: italic;
  line-height: 17px;
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #171717;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function LinkExport(props) {
  return (
    <Link href="#" title={props.title}>
      {props.title}
    </Link>
  );
}

LinkExport.propTypes = {
  title: PropTypes.string.isRequired,
};
