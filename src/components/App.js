import { Fragment } from 'react';
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
  return (
    <>
      <GlobalStyle />
      <ThemeProvider id="theme" theme={colorTheme}>
        <Router>
          <AppWrap id="appWrap">
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Properties />
              </Route>
              <Route path="/add-property">
                <AddProperty />
              </Route>
            </Switch>
          </AppWrap>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
