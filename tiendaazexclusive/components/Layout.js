import React, { useContext } from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import Image from 'next/image';
import { Store } from '../utils/Store';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'ligth',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - AZ Exclusive` : 'AZ Exclusive'}</title>
        {description && <meta name="descripcion" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
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
                <Link>
                  <Image
                    src="/imagenes/carros.png"
                    width={35}
                    height={35}
                    alt="logo"
                  ></Image>
                </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>
                  <Image
                    src="/imagenes/login.png"
                    width={35}
                    height={35}
                    alt="logo"
                  ></Image>
                </Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>Todos los derechos reservados. AZ Exclusive.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
