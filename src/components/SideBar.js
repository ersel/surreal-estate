import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBarWrap = styled.div`
  border: 1px solid blue;
  width: 15%;
  min-width: 200px;
  height: 100%;
  grid-row: 1 / -1;
  background-color: ${(props) => props.theme.fg};
  display: flex;
  flex-direction: column;
`;

const MenuHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
`;

const StyledLink = styled(Link)``;

const SideBar = () => {
  return (
    <SideBarWrap>
      <MenuHeading>Filter by City</MenuHeading>
      <StyledLink to={`/?query={"city": "Manchester"}`}>Manchester</StyledLink>
      <StyledLink to={`/?query={"city": "Leeds"}`}>Leeds</StyledLink>
      <StyledLink to={`/?query={"city": "Liverpool"}`}>Liverpool</StyledLink>
      <StyledLink to={`/?query={"city": "Sheffield"}`}>Sheffield</StyledLink>
      <StyledLink to="/">All</StyledLink>
    </SideBarWrap>
  );
};

export default SideBar;
