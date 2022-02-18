import Routes from './routes'
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Navbar from './components/Navbar'
import Layout from './components/Layout';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes />
          <Navbar />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
