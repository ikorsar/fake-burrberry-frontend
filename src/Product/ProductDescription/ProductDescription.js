import React, {Component} from "react";
import styled from "styled-components";

import {Accordion, AccordionButton, AccordionButtons, AccordionContent} from "../../components/Accordion/Accordion";

const ProductDescriptionArticle = styled.article`
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

class ProductDescription extends Component {
  render() {
    return (
      <Accordion className="is-active">
        <div className="container">
          <AccordionButtons>
            <AccordionButton type="button">Description</AccordionButton>
          </AccordionButtons>
          <AccordionContent>
            <ProductDescriptionArticle>
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
            </ProductDescriptionArticle>
          </AccordionContent>
        </div>
      </Accordion>
    );
  }
}

export default ProductDescription;