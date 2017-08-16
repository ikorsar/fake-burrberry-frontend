import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';

import heart from './heart.svg';

const Card = styled(Link)`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin-bottom: .5rem;
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

const Header = styled.header`
  justify-content: space-between;
  align-items: center;
  margin: 0 0 .5rem;
  display: ${props => (props.fullCard ? 'flex' : 'none')};
`;

const Label = styled.h4`
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 400;
  margin: 0;
`;

const Favorites = styled.button`
  display: block;
  padding: 0;
  background-color: transparent;
  border: none;
  }
`;

const Heart = styled.img`display: block;`;

const Available = styled.div`
  font-size: 12px;
  line-height: 1rem;
  margin-bottom: .25rem;
  display: ${props => (props.fullCard ? 'block' : 'none')};
`;

const Text = styled.p`margin: 0;`;

const Color = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #171717;
`;

const Title = styled.h3`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  margin: 0 0 .5rem;

  @media screen and (min-width: 48rem) {
    margin-bottom: .5rem;
  }

  @media screen and (min-width: 62rem) {
    font-size: .75rem;
    font-weight: 600;
    line-height: 1.67;
    margin-top: 1rem;
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

export default function CardExport(props) {
  return (
    <Card to={props.link} title={props.title}>
      <Photo src={props.photoName} alt={props.title} />
      <Header fullCard={props.fullCard}>
        <Label>
          {props.label}
        </Label>
        <Favorites>
          <Heart src={heart} />
        </Favorites>
      </Header>
      <Title>
        {props.title}
      </Title>
      <Available fullCard={props.fullCard}>
        <Text>
          Available in&nbsp;
          <Color>{props.colourQuantity} colours</Color>
        </Text>
      </Available>
      <Price>
        <FormattedNumber
          value={props.price}
          style="currency" // eslint-disable-line
          currency={props.currency}
          currencyDisplay="symbol"
          minimumFractionDigits={0}
        />
      </Price>
    </Card>
  );
}

CardExport.defaultProps = {
  fullCard: false,
};

CardExport.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  photoName: PropTypes.string.isRequired,
  colourQuantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  fullCard: PropTypes.bool,
};
