/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import { Button } from '../styles/styles';

const SideBarWrap = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 100%;
  grid-row: 1 / span 3;
  background-color: ${(props) => props.theme.fg};
  display: flex;
  flex-direction: column;
`;

const MenuHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
`;

const StyledLink = styled(Link)``;

const Form = styled.form``;

const Input = styled.input`
  width: 95%;
`;

const buildQueryString = (operation, valueObj, search) => {
  const currentQueryParams = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify({
      ...JSON.parse(currentQueryParams[operation] || '{}'),
      ...valueObj,
    }),
  };

  return qs.stringify(newQueryParams, {
    addQueryPrefix: true,
    encode: true,
  });
};

const SideBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();
  const { search } = useLocation();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchPath = buildQueryString(
      'query',
      {
        title: { $regex: searchInput },
      },
      search
    );
    history.push(searchPath);
  };

  return (
    <SideBarWrap>
      <MenuHeading>Filter by City</MenuHeading>
      <StyledLink
        to={buildQueryString('query', { city: 'Manchester' }, search)}
      >
        Manchester
      </StyledLink>
      <StyledLink to={buildQueryString('query', { city: 'Leeds' }, search)}>
        Leeds
      </StyledLink>
      <StyledLink to={buildQueryString('query', { city: 'Liverpool' }, search)}>
        Liverpool
      </StyledLink>
      <StyledLink to={buildQueryString('query', { city: 'Sheffield' }, search)}>
        Sheffield
      </StyledLink>
      <StyledLink to="/">All</StyledLink>
      <MenuHeading>Sort by</MenuHeading>
      <StyledLink to={buildQueryString('sort', { price: 1 }, search)}>
        Price Ascending
      </StyledLink>
      <StyledLink to={buildQueryString('sort', { price: -1 }, search)}>
        Price Descending
      </StyledLink>
      <MenuHeading>Search by Keyword</MenuHeading>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="input"
          value={searchInput}
          placeholder="Spacious family home..."
          onChange={handleChange}
        />
        <Button>Go</Button>
      </Form>
      <StyledLink to="/">Clear all filters</StyledLink>
    </SideBarWrap>
  );
};

export default SideBar;
