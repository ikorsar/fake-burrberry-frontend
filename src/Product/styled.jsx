import styled from "styled-components";

export const Recommends = styled.section`
  padding: 3rem .5rem 0;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 0;
  }
`;

export const More = Recommends.extend`
  padding-top: 1rem;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export const MoreLink = styled.a`
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