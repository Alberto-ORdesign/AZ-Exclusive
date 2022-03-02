import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Productos</h1>
        <ul>
          <li>Producto 1</li>
          <li>Producto 2</li>
          <li>Producto 3</li>
        </ul>
      </div>
    </Layout>
  );
}
