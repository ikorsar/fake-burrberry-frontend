import React, {Component} from 'react';
import styled from 'styled-components';

const Accordion = styled.div`
  border-top: 1px solid #c6c6c6;
  
  @media screen and (min-width: 48rem) {
    border-top: none;
  }
  
  & + & {
    border-bottom: 1px solid #c6c6c6;
    
    @media screen and (min-width: 48rem) {
      border-bottom: none;
    }
  }
`;

const AccordionButtons = styled.div`
  display: flex;
  flex-flow: column;
`;

const AccordionButton = styled.button`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  position: relative;
  display: block;
  padding: 2rem .5rem;
  text-align: left;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 1rem;
  }
  
  &:after {
    position: absolute;
    top: 50%;
    right: .5rem;
    width: 0;
    height: 0;
    content: '';
    transform: translateY(-50%);
    border-width: 10px 5px 0;
    border-style: solid;
    border-color: #171717 transparent transparent;
    
    @media screen and (min-width: 48rem) {
      display: none;
    }
  }
`;

const AccordionContent = styled.div`
  display: none;
  padding: 0 .5rem 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
    padding: 0 0 1.5rem;
  }
  
  p {
    font-family: 'Lora', Helvetica, Arial, serif;
    font-size: .875rem;
    line-height: 1.5rem;
    margin: 0;
  }

  p + ul {
    margin-top: 1.5rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-family: 'Lora', Helvetica, Arial, serif;
    font-size: .875rem;
    line-height: 1.5rem;
    
    &:last-child {
    margin-bottom: 0;
  }
`;

export default () => (
  <Accordion className="is-active">
    <div className="container">
      <AccordionButtons>
        <AccordionButton>Description</AccordionButton>
      </AccordionButtons>
      <AccordionContent>
        <p>A refined car coat crafted in protective cotton gabardine.</p>
        <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and
          rain.</p>
        <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
        <p>The piece is finished with a distinctive check undercollar.</p>
        <ul>
          <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</li>
          <li>Outer: 100% cotton</li>
          <li>Check lining: 100% cotton</li>
          <li>Sleeve lining: 100% viscose</li>
          <li>Buttons: buffalo horn</li>
          <li>Specialist dry clean</li>
          <li>Made in Europe</li>
          <li>Item 39428531</li>
        </ul>
      </AccordionContent>
    </div>
  </Accordion>
);