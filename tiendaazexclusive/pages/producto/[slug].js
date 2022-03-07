import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import useStyles from '../../utils/styles';
import Image from 'next/image';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function PantallaProducto() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const producto = data.productos.find((a) => a.slug === slug);
  if (!producto) {
    return <div>Producto no encontrado</div>;
  }
  return (
    <Layout title={producto.nombre} description={producto.descripcion}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Volver a la página de productos</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={440}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {producto.nombre}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Categoria: {producto.categoria}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Categoria: {producto.empresa}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Categoria: {producto.rating} stars ({producto.numReviews})
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Descripción: {producto.descripcion}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Precio</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{producto.precio}€</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>En stock</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {producto.stock > 0 ? 'Disponible' : 'No disponible'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Añadir al carrito
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
