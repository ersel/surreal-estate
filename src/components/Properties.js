/* eslint-disable react/jsx-fragments */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import PropTypes from 'prop-types';
import { Fragment, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import SideBar from './SideBar';
import getPropertyListings from '../util/requests/getPropertyListings';

const API_PORT = process.env.REACT_APP_API_PORT;

const PropertiesContainer = styled.div`
  border: 1px solid purple;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: repeat(auto, min-content);
  grid-gap: 20px;
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  grid-column: 2 / 5;
`;

const CardsContainer = styled.div`
  grid-column: 2/3;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const Properties = ({ userID }) => {
  console.log({ userID });
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: '', isSuccess: true });
  const { search } = useLocation();

  const onSuccessfulResponse = (response) => {
    setProperties(response.data);
    setAlert({
      message: '',
      isSuccess: true,
    });
  };

  const onResponseError = (error) => {
    setAlert({
      message: 'Sorry, there was an error. Please try again later.',
      isSuccess: false,
    });
    console.error(error);
  };

  const saveProperty = (propertyId) => {
    axios
      .post(
        `http://localhost:${API_PORT}/api/v1/Favourite?populate=propertyListing`,
        {
          propertyListing: propertyId,
          fbUserId: userID,
        }
      )
      .then((response) => {
        setAlert({ message: 'Property added to favourites!', isSuccess: true });
        console.log(response);
      })
      .catch((error) => {
        setAlert({
          message:
            'There was an error saving property. Please try again later.',
          isSuccess: false,
        });
        console.error(error);
      });
    setTimeout(() => {
      setAlert({ message: '', isSuccess: true });
    }, 5000);
  };

  useEffect(async () => {
    try {
      const response = await getPropertyListings();
      onSuccessfulResponse(response);
    } catch (error) {
      onResponseError(error);
    }
  }, []);

  useEffect(async () => {
    try {
      const response = await getPropertyListings(search);
      onSuccessfulResponse(response);
    } catch (error) {
      onResponseError(error);
    }
  }, [search]);

  const allPropertyCards = properties.map((prop) => {
    return (
      <PropertyCard
        {...prop}
        bedrooms={Number(prop.bedrooms)}
        bathrooms={Number(prop.bathrooms)}
        key={prop._id}
        id={prop._id}
        userID={userID}
        saveProperty={saveProperty}
      />
    );
  });

  return (
    <Fragment>
      <PropertiesContainer>
        <SideBar />
        <Alert message={alert.message} isSuccess={alert.isSuccess} />
        <CardsContainer>{allPropertyCards}</CardsContainer>
      </PropertiesContainer>
    </Fragment>
  );
};

Properties.propTypes = {
  userID: PropTypes.number,
};
export default Properties;
