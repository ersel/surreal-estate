/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';
import { Subheading, Button } from '../styles/styles';
import Alert from './Alert';

const API_PORT = process.env.REACT_APP_API_PORT;

const AddPropertyContainer = styled.div`
  margin: 0px auto;
  padding: 20px 0;
`;

const Heading = styled.h1`
  font-size: 1.8rem;
`;

const Form = styled.form`
  margin: 10px auto;
  border-radius: 5px;
  margin: 40px auto;
  padding: 20px 40px;
  max-width: 600px;
  background-color: ${(props) => props.theme.fg};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.06) 0px 10px 10px -5px;
  font-size: 0.8rem;
`;

const FormItemWrap = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.details};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 20px 10px;
`;

const LongInput = styled.input`
  padding: 5px;
`;

const ShortInput = styled.input`
  padding: 5px;
  width: 50px;
  text-align: center;
`;

const Label = styled.label`
  align-self: flex-start;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const Select = styled.select`
  width: 180px;
  padding: 5px;
`;

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: 'flat',
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: '',
    },
    alert: {
      message: '',
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({
      message: '',
      isSuccess: false,
    });
    axios
      .post(`http://localhost:${API_PORT}/api/v1/PropertyListing`, {
        ...fields,
      })
      .then((res) => {
        setAlert({ message: 'Property added!', isSuccess: true });
      })
      .catch((err) => {
        setAlert({
          message: 'Server error. Please try again later or call our helpline.',
          isSuccess: false,
        });
        console.error(err);
      });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <AddPropertyContainer>
      <Heading>Add Property</Heading>
      <Subheading>
        Fill out this form to advertise your property on Surreal Estate
      </Subheading>
      <Form onSubmit={handleAddProperty}>
        <Alert message={alert.message} isSuccess={alert.isSuccess} />
        <FormItemWrap>
          <Label htmlFor="title">Title</Label>
          <LongInput
            type="text"
            id="title"
            name="title"
            placeholder="Cosy 2 Bedroom Cottage..."
            value={fields.title}
            onChange={handleFieldChange}
          />
        </FormItemWrap>
        <FormItemWrap>
          <Label htmlFor="city">City</Label>
          <Select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </Select>
        </FormItemWrap>
        <FormItemWrap>
          <Label htmlFor="type">Property Type</Label>
          <Select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="flat">Flat</option>
            <option value="detached">Detached</option>
            <option value="semi-detached">Semi-Detached</option>
            <option value="terraced">Terraced</option>
            <option value="end-of-terrace">End of Terrace</option>
            <option value="cottage">Cottage</option>
            <option value="bungalow">Bungalow</option>
          </Select>
        </FormItemWrap>
        <FormItemWrap>
          <Label htmlFor="bedrooms">No. of Bedrooms</Label>
          <ShortInput
            type="number"
            min="0"
            id="bedrooms"
            name="bedrooms"
            placeholder="2"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </FormItemWrap>
        <FormItemWrap>
          <Label htmlFor="bathrooms">No. of Bathrooms</Label>
          <ShortInput
            type="number"
            min="0"
            id="bathrooms"
            name="bathrooms"
            placeholder="2"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </FormItemWrap>
        <FormItemWrap>
          <Label htmlFor="price">Price</Label>
          <LongInput
            type="text"
            inputmode="numeric"
            pattern="[0-9]+"
            id="price"
            name="price"
            placeholder="500 000"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </FormItemWrap>
        <FormItemWrap>
          <Label htmlFor="email">Email</Label>
          <LongInput
            type="text"
            id="email"
            name="email"
            placeholder="youremail@mail.com"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormItemWrap>
        <Button type="submit">Add Property</Button>
      </Form>
    </AddPropertyContainer>
  );
};

export default AddProperty;
