import styled from 'styled-components';
import React, { useState } from 'react';
import { Heading, Subheading } from '../styles/styles';

const AddPropertyContainer = styled.div`
  margin: 30px auto;
`;

const Form = styled.form`
  margin: 10px auto;
  border-radius: 5px;
  margin: 0 auto;
  padding: 10px 40px;
  width: 45%;
  background-color: #d7e1e8;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const FormItemWrap = styled.div`
  border-bottom: 1px solid #a2a2a2;
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
`;

const Select = styled.select`
  width: 180px;
  padding: 5px;
`;

const Button = styled.button`
  width: 100px;
  align-self: center;
  margin: 20px;
`;

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: 'flat',
      bedrooms: '',
      bathrooms: '',
      price: '',
      email: '',
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
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
        <FormItemWrap>
          <Label htmlFor="title">Title</Label>
          <LongInput
            id="title"
            name="title"
            placeholder="Cosy 2 Bedroom Cottage"
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
            id="price"
            name="price"
            placeholder="£500,000"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </FormItemWrap>
        <FormItemWrap>
          <Label htmlFor="email">Email</Label>
          <LongInput
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
