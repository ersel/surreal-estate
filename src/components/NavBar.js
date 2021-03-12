/* eslint-disable react/require-default-props */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import logo from '../images/logo.png';

const NavContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.details};
  display: flex;
  justify-content: flex-start;
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
`;

const LogoText = styled.p`
  margin: 0;
  font-weight: 800;
`;

const LogoImage = styled.img`
  width: 50px;
  padding: 0px;
  margin: 0px;
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

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
`;

const FacebookLogout = styled.button``;

const NavBar = ({ onLogin, onLogout, userID }) => {
  return (
    <NavContainer>
      <Logo>
        <LogoImage src={logo} />
        <LogoText>Surreal Estate</LogoText>
      </Logo>

      <NavLinksList>
        <NavLink>
          <StyledLink to="/">View Properties</StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/add-property">Add a Property</StyledLink>
        </NavLink>
      </NavLinksList>
      {userID ? (
        <FacebookLogout onClick={onLogout}>Log out</FacebookLogout>
      ) : (
        <FacebookLogin
          appId="447200789851010"
          autoLoad={false}
          fields="name,email,picture"
          callback={onLogin}
        />
      )}
    </NavContainer>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.number,
};

export default NavBar;
