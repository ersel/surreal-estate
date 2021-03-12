/* eslint-disable react/require-default-props */
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from '../styles/styles';
import formatNumber from '../util/helpers/formatNumber';

const PropertyCardContainer = styled.div`
  width: 100%;
  border: 1px solid purple;
`;

const PropertyTitle = styled.h3`
  text-transform: capitalize;
`;

const PropertyInfo = styled.p`
  text-transform: capitalize;
`;

const PropertyCard = (props) => {
  const [saveAlert, setSaveAlert] = useState('');

  const {
    title,
    city,
    type,
    price,
    bathrooms,
    bedrooms,
    email,
    id,
    userID,
  } = props;

  const saveProperty = () => {
    axios
      .post('http://localhost:3000/api/v1/Favourite', {
        propertyListing: id,
        fbUserId: userID,
      })
      .then((response) => {
        setSaveAlert('Property added to favourites');
        console.log(response);
      })
      .catch((error) => {
        setSaveAlert(
          'There was an error saving property. Please try again later.'
        );
        console.error(error);
      });
  };

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
      {userID && <Button onClick={saveProperty}>Save</Button>}
      <p>{saveAlert}</p>
    </PropertyCardContainer>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.number,
  id: PropTypes.string.isRequired,
};

export default PropertyCard;
