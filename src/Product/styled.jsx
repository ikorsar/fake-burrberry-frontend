import styled from 'styled-components';

export const Title = styled.h1`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
  padding: 1rem .5rem;

  @media screen and (min-width: 48rem) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    padding: 1.5rem 0;
  }

  @media screen and (min-width: 62rem) {
    margin: 0 0 .5rem;
    padding: 0;
  }
`;

export const TitleSection = styled.h2`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  position: relative;
  margin: 0 0 1rem;
  text-transform: uppercase;
  color: #171717;

  @media screen and (min-width: 48rem) {
    line-height: 19px;
    margin: 0 0 1rem;
  }
`;

export const Recommends = styled.section`
  padding: 3rem .5rem 0;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 0;
  }
`;
