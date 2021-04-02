/* eslint-disable no-unused-vars */
// List favourites so the user can click them to view
// Allow user to delete them
// on load, need to get all user's saved properties
import axios from 'axios';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PropertyListItem from './PropertyListItem';

const API_PORT = process.env.REACT_APP_API_PORT;

const SavedPropertiesContainer = styled.div``;

const SavedProperties = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:${API_PORT}/api/v1/Favourite?populate=propertyListing`
      )
      .then((response) => {
        console.log(response);
        setFavourites(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleRemoveFavourite = (id) => {
    axios
      .delete(`http://localhost:${API_PORT}/api/v1/Favourite/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.error);
  };

  const favouritesList = favourites.map((fave) => (
    <PropertyListItem
      key={fave._id}
      id={fave._id}
      title={fave.propertyListing.title}
      handleRemoveFavourite={handleRemoveFavourite}
    />
  ));

  return <SavedPropertiesContainer>{favouritesList}</SavedPropertiesContainer>;
};

export default SavedProperties;
