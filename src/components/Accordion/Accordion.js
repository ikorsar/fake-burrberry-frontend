import styled from "styled-components";

export const Accordion = styled.div`
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

export const AccordionButtons = styled.div`
  display: flex;
  flex-flow: column;
`;

export const AccordionButton = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
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
    content: "";
    transform: translateY(-50%);
    border-width: 10px 5px 0;
    border-style: solid;
    border-color: #171717 transparent transparent;
    
    @media screen and (min-width: 48rem) {
      display: none;
    }
  }
`;

export const AccordionContent = styled.div`
  display: none;
  padding: 0 .5rem 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
    padding: 0 0 1.5rem;
  }
  
  .is-active & {
    display: block;
  }
`;