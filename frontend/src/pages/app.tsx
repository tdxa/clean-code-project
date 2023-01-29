import AppSnackbarProvider from '../components/Common/Snackbars/SnackbarProvider';
import IndexPage from '.';
import Notifier from '../components/Common/Snackbars/Notifier';
import RecipePage from './recipe/[recipe._id]';
import { Router } from '@reach/router';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/mui/mui-theme';

const App = () => {
  // note: layout should not be included in the App component, since direct access
  // to a protected resource flashes the Layout before the redirection.

  return (
    <AppSnackbarProvider>
      <Notifier />
      <ThemeProvider theme={theme}>
        <Router>
          <IndexPage path='/'>
            <RecipePage path='recipe/:id' />
          </IndexPage>
        </Router>
      </ThemeProvider>
    </AppSnackbarProvider>
  );
};

export default App;
