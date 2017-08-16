import styled from 'styled-components';

export const ButtonText = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  display: block;
  align-self: flex-start;
  margin: .5rem 0 3rem;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 62rem) {
    margin: 0;
  }
`;

export default ButtonText;
