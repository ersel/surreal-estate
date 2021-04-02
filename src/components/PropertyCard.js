/* eslint-disable react/require-default-props */

import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Button } from '../styles/styles';
import formatNumber from '../util/helpers/formatNumber';

const PropertyCardContainer = styled.div`
  width: 100%;
  border: 1px solid purple;
  background-color: ${(props) => props.theme.fg};
`;

const PropertyTitle = styled.h3`
  text-transform: capitalize;
`;

const PropertyInfo = styled.p`
  text-transform: capitalize;
`;

const PropertyCard = (props) => {
  const {
    bathrooms,
    bedrooms,
    city,
    email,
    id,
    price,
    saveProperty,
    title,
    type,
    userID,
  } = props;

  return (
    <PropertyCardContainer>
      <img
        src="https://placekitten.com/320/180"
        alt="Outside view of the property"
      />
      <PropertyTitle>{title}</PropertyTitle>
      <PropertyInfo>
        {type} - {city}
      </PropertyInfo>
      <PropertyInfo>Bedrooms: {bedrooms}</PropertyInfo>
      <PropertyInfo>Bathrooms: {bathrooms}</PropertyInfo>
      <PropertyInfo>£{formatNumber(price)}</PropertyInfo>
      <a href={`mailto:${email}`}>
        <Button>Email</Button>
      </a>
      {userID && <Button onClick={() => saveProperty(id)}>Save</Button>}
    </PropertyCardContainer>
  );
};

PropertyCard.propTypes = {
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  saveProperty: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  userID: PropTypes.number,
};

export default PropertyCard;
