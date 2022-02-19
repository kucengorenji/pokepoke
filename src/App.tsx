import Routes from './routes'
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';


function App() {
  return (
      <ThemeProvider theme={theme}>
          <Routes />
      </ThemeProvider>
  );
}

export default App;
