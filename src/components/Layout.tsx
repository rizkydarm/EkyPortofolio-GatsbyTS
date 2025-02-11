import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, GlobalStyles } from '@mui/material';
import theme from '../styles/theme';
import Navbar from '../components/Navbar';

// Define global styles as a plain object
const globalStyles = {
  '@import': "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')",
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f5f5f5',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  '*': {
    boxSizing: 'border-box',
  },
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Reset browser styles */}
      <CssBaseline />
      {/* Apply global styles */}
      <GlobalStyles styles={globalStyles} />
      <Navbar />
      <Box sx={{ height: 60 }} />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;