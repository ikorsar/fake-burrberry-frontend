import styled from 'styled-components';

export const ProductDetails = styled.article`
  margin: 0 -.5rem;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

export const ProductHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (min-width: 48rem) {
    padding: 0 0 1rem;
  }
`;

export const ProductColors = styled.section`
  margin: 0 1rem 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    margin: 0 0 2rem;
  }
`;

export const ProductColorsChoosen = styled.p`
  font-size: .75rem;
  line-height: 1rem;
  margin: 0 0 1rem;
`;

export const ProductColorsContainer = styled.div`display: flex;`;

export const ProductControls = styled.section`
  display: flex;
  flex-flow: column;
  padding: 0 1rem 3rem;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;
