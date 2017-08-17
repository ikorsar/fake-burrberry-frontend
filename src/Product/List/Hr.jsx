import styled from 'styled-components';

const Hr = styled.hr`
  display: block;
  border: 0;
  border-top: 1px solid #c6c6c6;
  margin: 3rem 0;

  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
  }

  @media screen and (min-width: 62rem) {
    margin: 2rem 0 4rem;
  }
`;

export default Hr;
