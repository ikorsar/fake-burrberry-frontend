import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HelpLink = styled.a`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: .875rem;
  font-style: italic;
  line-height: 1rem;
  display: block;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default function HelpLinkExport(props) {
  return (
    <HelpLink href="#" title={props.children}>
      {props.children}
    </HelpLink>
  );
}

HelpLinkExport.propTypes = {
  children: PropTypes.string.isRequired,
};
