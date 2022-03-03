import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Layout from '../components/Layout';
import data from '../utils/data';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Productos</h1>
        <Grid container spacing={3}>
          {data.productos.map((producto) => (
            <Grid item md={4} key={producto.nombre}>
              <Card>
                <NextLink href={`/producto/${producto.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={producto.imagen}
                      title={producto.nombre}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{producto.nombre}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>{producto.precio}€</Typography>
                  <Button size="small" color="primary">
                    Añadir al carrito
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
