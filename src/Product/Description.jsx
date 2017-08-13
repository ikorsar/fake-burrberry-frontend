import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import Accordion from '../components/Accordion';
import { TitleSection } from './styled';

const Description = styled.section`
  @media screen and (min-width: 48rem) {
    padding-bottom: 1.5rem;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Title = TitleSection.extend`
  padding: 1.5rem 0 0;
  display: none;

  @media screen and (min-width: 48rem) {
    display: block;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 0;
  }
`;

const Article = styled.article`
  padding: 0 .5rem;

  @media screen and (min-width: 48rem) {
    margin-left: -.5rem;
    margin-right: -.5rem;
  }

  p {
    font-family: "Lora", Helvetica, Arial, serif;
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
    font-family: "Lora", Helvetica, Arial, serif;
    font-size: .875rem;
    line-height: 1.5rem;

    &:last-child {
    margin-bottom: 0;
  }
`;

const Images = styled.section`
  padding-top: 4rem;

  .row div:first-child img {
    margin-top: 2rem;
  }

  .row div:nth-child(2) img {
    margin-top: 6rem;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

export default () =>
  (<Description>
    <Accordion title="Description">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Title>Description</Title>
            <Article>
              <p>A refined car coat crafted in protective cotton gabardine.</p>
              <p>
                Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and
                breathable fabric that protects against wind and rain.
              </p>
              <p>
                Raglan sleeves and a concealed button closure complement the clean tailored lines.
              </p>
              <p>The piece is finished with a distinctive check undercollar.</p>

              <ul>
                <li>
                  Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change
                  slightly according to size.
                </li>
                <li>Outer: 100% cotton</li>
                <li>Check lining: 100% cotton</li>
                <li>Sleeve lining: 100% viscose</li>
                <li>Buttons: buffalo horn</li>
                <li>Specialist dry clean</li>
                <li>Made in Europe</li>
                <li>Item 39428531</li>
              </ul>
            </Article>
          </div>
          <MediaQuery minWidth={992}>
            <div className="col-lg-8">
              <Img src="/files/description-big.jpg" alt="Description Photo" />
            </div>
          </MediaQuery>
        </div>
        <MediaQuery minWidth={992}>
          <div className="row">
            <div className="col-lg-12">
              <Images>
                <div className="row">
                  <div className="col-lg-4">
                    <Img src="/files/description-small1.jpg" alt="Description Photo Small" />
                  </div>
                  <div className="col-lg-4">
                    <Img src="/files/description-small2.jpg" alt="Description Photo Small" />
                  </div>
                  <div className="col-lg-4">
                    <Img src="/files/description-small3.jpg" alt="Description Photo Small" />
                  </div>
                </div>
              </Images>
            </div>
          </div>
        </MediaQuery>
      </div>
    </Accordion>
  </Description>);
