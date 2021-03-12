/* eslint-disable react/jsx-fragments */
/* eslint-disable no-console */
import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import { colorTheme } from '../styles/styles';
import GlobalStyle from '../styles/globalStyles';

const AppWrap = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
  text-align: center;
`;

function App() {
  const [userID, setUserID] = useState();

  const handleLogin = (response) => {
    console.log({ response });
    setUserID(Number(response.id));
  };
  const handleLogout = () => {
    window.FB.logout((response) => {
      console.log('Logged out', { response });
    });
    setUserID();
  };

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider id="theme" theme={colorTheme}>
        <Router>
          <AppWrap id="appWrap">
            <NavBar
              onLogin={handleLogin}
              onLogout={handleLogout}
              userID={userID}
            />
            <Switch>
              <Route exact path="/" userID={userID}>
                <Properties userID={userID} />
              </Route>
              <Route path="/add-property">
                <AddProperty />
              </Route>
            </Switch>
          </AppWrap>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
