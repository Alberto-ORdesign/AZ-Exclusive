import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Tu Tienda Online Favorita</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>AZ Exclusive</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>Todos los derechos reservados. AZ Exclusive.</Typography>
      </footer>
    </div>
  );
}
