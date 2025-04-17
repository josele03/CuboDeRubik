import React from 'react';
import Layout from '@theme/Layout';
import Juego from '../components/Rubik/juego_completo';

export default function JuegoPage() {
  return (
    <Layout title="Rubik" description="Cubo de Rubik interactivo">
      <main>
        <Juego />
      </main>
    </Layout>
  );
}