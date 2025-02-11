import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Avatar, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const pages = [
    {
      name: 'My Portfolio',
      link: '/',
    },
    {
      name: 'My CV',
      link: '/cv',
    },
    {
      name: 'My Contact',
      link: '/contact',
    }
  ];

const Navbar = () => {
  return (
    <AppBar 
        position="fixed"
        elevation={0}
        sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            color: 'white'
        }}
    >
      <Toolbar disableGutters>
        <StaticImage
            src="../images/favicon.png"
            alt="logo"
            placeholder="blurred"
            layout="constrained"
            width={40}
            height={40}
            style={{ marginInline: '16px' }}
        />
        <Stack spacing={0} direction="row">
          {pages.map((item, index) => (
            <Button
              key={item.name}
              component={Link}
              to={item.link}
              sx={{ 
                color: 'black', 
                fontWeight: 'bold',
                marginRight: '8px'
              }}
            >
              {item.name}
            </Button>
          ))}
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Avatar
          alt="Rizky"
          style={{ marginInline: '16px' }}
        >
          <StaticImage
            src="../images/avatar.jpg"
            alt="Rizky"
            placeholder="blurred"
          />
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;