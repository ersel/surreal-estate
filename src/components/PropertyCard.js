import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  const { title, city, type, price, bathrooms, bedrooms, email } = props;

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
};

export default PropertyCard;
