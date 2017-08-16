import React from 'react';
import styled from 'styled-components';

import Card from '../Card/index';
import Hr from '../../components/Hr';

const SubCategory = styled.section`
  padding: 3rem 0 0;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Title = styled.h3`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  margin: 0 0 1rem;
`;

export default () =>
  (<SubCategory>
    <Title>Herritage Trench Coats</Title>
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <Card
          fullCard
          link="/products/product1"
          label="Relaxed fit"
          title="The Westminster – Long Heritage Trench Coat"
          photoName="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=354&wid=266"
          colourQuantity={3}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          fullCard
          link="/products/product1"
          label="Classic fit"
          title="The Kensington – Mid-Length Heritage Trench Coat"
          photoName="https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&hei=354&wid=266"
          colourQuantity={4}
          price={110000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          fullCard
          link="/products/product1"
          label="Toilered fit"
          title="The Sandringham – Mid-length Heritage Trench Coat"
          photoName="https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&hei=354&wid=266"
          colourQuantity={3}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          fullCard
          link="/products/product1"
          label="Slim fit"
          title="The Chelsea – Short Heritage Trench Coat"
          photoName="https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&hei=354&wid=266"
          colourQuantity={2}
          price={110000}
          currency="RUB"
        />
      </div>
    </div>
    <Hr />
    <Title>Single Breasted Trench Coats</Title>
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <Card
          fullCard
          link="/products/product1"
          label="Online Exclu"
          title="The Brighton – Longline Car Coat"
          photoName="https://assets.burberry.com/is/image/Burberryltd/70d0ea20f4faa00e90a0e70fed88af9cd4874824.jpg?$BBY_V2_ML_3X4$&hei=354&wid=266"
          colourQuantity={7}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          fullCard
          link="/products/product1"
          label="New in"
          title="The Brighton – Longline Car Coat"
          photoName="https://assets.burberry.com/is/image/Burberryltd/32792b6c9cf40c27ce446864bc6bae457d490199.jpg?$BBY_V2_ML_3X4$&hei=354&wid=266"
          colourQuantity={7}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          fullCard
          link="/products/product1"
          label="New in"
          title="The Brighton – Longline Car Coat"
          photoName="https://assets.burberry.com/is/image/Burberryltd/0c526ecde3443d15c60f660214d320ca4c338c88.jpg?$BBY_V2_ML_3X4$&hei=354&wid=266"
          colourQuantity={7}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          fullCard
          link="/products/product1"
          label="New in"
          title="The Brighton – Longline Car Coat"
          photoName="https://assets.burberry.com/is/image/Burberryltd/98f1a84f2c171dfc4ffe373e13f5c258e4b79ea9.jpg?$BBY_V2_ML_3X4$&hei=354&wid=266"
          colourQuantity={7}
          price={120000}
          currency="RUB"
        />
      </div>
    </div>
  </SubCategory>);
