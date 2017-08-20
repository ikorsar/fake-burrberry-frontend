import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import Card from '../Card/index';
import Hr from './Hr';

const SubCategory = styled.section`
  padding-top: 2rem;

  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Title = styled.h3`
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  margin: 0 0 1rem;

  @media screen and (min-width: 48rem) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export default () =>
  (<SubCategory>
    <Title>Heritage Trench Coats</Title>
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <Card
          to="heritage-trench-coats/the-westminster–long-heritage-trench-coat"
          label="Relaxed fit"
          title="The Westminster – Long Heritage Trench Coat"
          src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          colourQuantity={3}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          to="heritage-trench-coats/the-kensington-mid-length-heritage-trench-coat"
          label="Classic fit"
          title="The Kensington – Mid-Length Heritage Trench Coat"
          src="https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          colourQuantity={4}
          price={110000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          to="heritage-trench-coats/the-sandringham-mid-length-heritage-trench-coat"
          label="Tailered fit"
          title="The Sandringham – Mid-length Heritage Trench Coat"
          src="https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          colourQuantity={3}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          to="heritage-trench-coats/the-chelsea–short-heritage-trench-coat"
          label="Slim fit"
          title="The Chelsea – Short Heritage Trench Coat"
          src="https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          colourQuantity={2}
          price={110000}
          currency="RUB"
        />
      </div>
    </div>
    <MediaQuery minWidth={768}>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            to="heritage-trench-coats/the-westminster–long-heritage-trench-coat"
            label="Relaxed fit"
            title="The Westminster – Long Heritage Trench Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/f1cdf8b71c19df8d42ed3ea90712c391e6823635.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            colourQuantity={3}
            price={120000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            to="heritage-trench-coats/the-kensington–long-heritage-trench-coat"
            label="Classic fit"
            title="The Kensington – Long Heritage Trench Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/23b186def7725e3d4ce4745374ebf11267ed68ed.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            colourQuantity={4}
            price={110000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            to="heritage-trench-coatsthe-sandringham-short-heritage-trench-coat"
            label="Tailered fit"
            title="The Sandringham Short Heritage Trench Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/c89a32c4e94178be2d833b9a3d434fa6087d1f25.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            colourQuantity={3}
            price={100000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            to="heritage-trench-coats/the-chelsea–long-heritage-trench-coat"
            label="Slim fit"
            title="The Chelsea – Long Heritage Trench Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/f3e96bbcf8fa0aca509c9f5933110b8596d4f06e.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            colourQuantity={2}
            price={110000}
            currency="RUB"
          />
        </div>
      </div>
    </MediaQuery>
    <Hr />
    <Title>Single Breasted Trench Coats</Title>
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <Card
          to="single-breasted-trench-coats/the-brighton–longline-car-coat"
          label="Online Exclusive"
          title="The Brighton – Longline Car Coat"
          src="https://assets.burberry.com/is/image/Burberryltd/70d0ea20f4faa00e90a0e70fed88af9cd4874824.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          colourQuantity={7}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          to="single-breasted-trench-coats/the-brighton–longline-car-coat"
          label="New in"
          title="The Brighton – Longline Car Coat"
          src="https://assets.burberry.com/is/image/Burberryltd/32792b6c9cf40c27ce446864bc6bae457d490199.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          colourQuantity={7}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          to="single-breasted-trench-coats/the-brighton–longline-car-coat"
          label="New in"
          title="The Brighton – Longline Car Coat"
          src="https://assets.burberry.com/is/image/Burberryltd/0c526ecde3443d15c60f660214d320ca4c338c88.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          colourQuantity={7}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          to="single-breasted-trench-coats/the-brighton–longline-car-coat"
          label="New in"
          title="The Brighton – Longline Car Coat"
          src="https://assets.burberry.com/is/image/Burberryltd/98f1a84f2c171dfc4ffe373e13f5c258e4b79ea9.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
          colourQuantity={7}
          price={120000}
          currency="RUB"
        />
      </div>
    </div>
    <MediaQuery minWidth={768}>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            to="single-breasted-trench-coats/the-camden–mid-length-car-coat"
            label="New in"
            title="The Camden – Mid-length Car Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            colourQuantity={7}
            price={120000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            to="single-breasted-trench-coats/the-camden–mid-length-car-coat"
            label="New in"
            title="The Camden – Mid-length Car Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/b340592f566593645f37fd61fdafe720e2c224b7.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            colourQuantity={7}
            price={100000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            to="single-breasted-trench-coats/the-camden–mid-length-car-coat"
            label="New in"
            title="The Camden – Mid-length Car Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/499e46c07518da4b2d208164cb6202b415346661.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            colourQuantity={7}
            price={110000}
            currency="RUB"
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            to="single-breasted-trench-coats/the-camden–mid-length-car-coat"
            label="New in"
            title="The Camden – Mid-length Car Coat"
            src="https://assets.burberry.com/is/image/Burberryltd/1297c5d67c810e003eed53e02959843669f1ce9c.jpg?$BBY_V2_ML_3X4$&hei=720&wid=540"
            colourQuantity={7}
            price={110000}
            currency="RUB"
          />
        </div>
      </div>
    </MediaQuery>
  </SubCategory>);
