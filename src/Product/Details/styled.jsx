import styled from 'styled-components';

export const Details = styled.article`
  margin: 0 -.5rem;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (min-width: 48rem) {
    padding: 0 0 1rem;
  }
`;

export const Colors = styled.section`
  margin: 0 1rem 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    margin: 0 0 2rem;
  }
  
  @media screen and (min-width: 62rem) {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 1.5rem;
  }
`;

export const ColorsChoosen = styled.p`
  font-size: .75rem;
  line-height: 1rem;
  margin: 0 0 1rem;
`;

export const ColorsContainer = styled.div`display: flex;`;

export const Controls = styled.section`
  display: flex;
  flex-flow: column;
  padding: 0 1rem 3rem;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;
