import axios from 'axios';

const getPropertyListings = async (query = '') => {
  const response = await axios.get(
    `http://localhost:3000/api/v1/PropertyListing/${query}`
  );
  return response;
};

export default getPropertyListings;
