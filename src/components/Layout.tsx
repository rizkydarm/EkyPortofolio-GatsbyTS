import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import theme from '../styles/theme';
import Navbar from '../components/Navbar';

// Define global styles as a plain object
const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto, Arial, sans-serif',
    backgroundColor: '#f5f5f5', // Light gray background
  },
  a: {
    textDecoration: 'none', // Remove underline from links
    color: 'inherit', // Inherit text color
  },
  '*': {
    boxSizing: 'border-box', // Ensure consistent box sizing
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
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;