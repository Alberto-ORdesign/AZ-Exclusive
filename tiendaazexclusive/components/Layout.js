import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import Image from 'next/image';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Tu Tienda Online Favorita</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Image
                src="/imagenes/logo.jpeg"
                width={150}
                height={80}
                alt="logo"
              ></Image>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/carrito" passHref>
              <Link>Carrito</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Iniciar Sesión</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>Todos los derechos reservados. AZ Exclusive.</Typography>
      </footer>
    </div>
  );
}
