import styled from 'styled-components';

const Hr = styled.hr`
  display: block;
  border: 0;
  border-top: 1px solid #c6c6c6;
  margin: 1rem 0 3rem;

  @media screen and (min-width: 48rem) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 62rem) {
    margin-bottom: 4rem;
  }
`;

export default Hr;
