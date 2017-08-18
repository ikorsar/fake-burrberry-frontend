import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';

import heart from './heart.svg';

const CardStyled = styled(Link)`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 62rem) {
    padding-bottom: 1rem;
  }
`;

const Photo = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
`;

const Info = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Label = styled.h4`
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 400;
  margin: 0 0 .5rem;
`;

const Favorites = styled.button`
  display: block;
  padding: 0;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  margin-left: .25rem;
`;

const Heart = styled.img`display: block;`;

const Colours = styled.div`
  font-size: 12px;
  line-height: 1rem;
  margin-bottom: .25rem;
`;

const Text = styled.p`margin: 0;`;

const Color = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #171717;
  font-size: .75rem;
  line-height: 1rem;
`;

const Title = styled.h3`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  margin: 0 0 .5rem;

  @media screen and (min-width: 48rem) {
    font-size: .875rem;
    line-height: 1.25rem;
  }

  @media screen and (min-width: 62rem) {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25;
  }
`;

const Price = styled.h4`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1.17;
  margin: 0;
  color: #999;

  @media screen and (min-width: 62rem) {
    line-height: 1.33;
    color: #171717;
  }
`;

const Card = props =>
  (<CardStyled to={props.link} title={props.title}>
    <Photo src={props.photoName} alt={props.title} />
    <Info>
      <div>
        {props.label !== ' ' &&
          <Label label={props.label}>
            {props.label}
          </Label>}
        <Title>
          {props.title}
        </Title>
        {props.colourQuantity > 0 &&
          <Colours colourQuantity={props.colourQuantity}>
            <Text>
              Available in&nbsp;
              <Color>{props.colourQuantity} colours</Color>
            </Text>
          </Colours>}
        <Price>
          <FormattedNumber
            value={props.price}
            style="currency" // eslint-disable-line
            currency={props.currency}
            currencyDisplay="symbol"
            minimumFractionDigits={0}
          />
        </Price>
      </div>
      <Favorites>
        <Heart src={heart} />
      </Favorites>
    </Info>
  </CardStyled>);

Card.defaultProps = {
  label: ' ',
  colourQuantity: 0,
};

Card.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  photoName: PropTypes.string.isRequired,
  colourQuantity: PropTypes.number,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Card;
