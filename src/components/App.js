import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import { colorTheme } from '../styles/styles';

const AppWrap = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
  text-align: center;
`;

function App() {
  return (
    <ThemeProvider id="theme" theme={colorTheme}>
      <AppWrap id="appWrap">
        <NavBar />
        <h1>Surreal Estate</h1>
        <Switch>
          <Route exact path="/">
            <Properties />
          </Route>
          <Route path="/add-property">
            <AddProperty />
          </Route>
        </Switch>
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
