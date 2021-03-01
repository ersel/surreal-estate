import styled from 'styled-components';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  border-bottom: 1px solid #c8c8c8;
  display: flex;
  justify-content: flex-start;
`;

const Logo = styled.img`
  width: 50px;
  padding: 0px;
  margin: 0 30px;
  align-self: center;
`;

const NavLink = styled.li`
  display: inline;
  list-style: none;
  margin: 0 40px;
  padding: 0px;
  cursor: pointer;
`;

const NavLinksList = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  align-self: center;
`;

const linkStyles = {
  color: 'black',
  textDecoration: 'none',
};

const NavBar = () => {
  return (
    <NavContainer>
      <Logo src={logo} />
      <NavLinksList>
        <NavLink>
          <Link to="/" style={linkStyles}>
            View Properties
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/add-property" style={linkStyles}>
            Add a Property
          </Link>
        </NavLink>
      </NavLinksList>
    </NavContainer>
  );
};

export default NavBar;
