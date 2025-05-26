// src/pages/perfil.js
import React from 'react';
import Layout from '@theme/Layout';
import Usuario from '../../components/User/usuario';


export default function Perfil() {
  return (
    <Layout title="Mi cuenta">
      <main style={{ padding: '2rem' }}>
        <h1>Mi cuenta</h1>
        <Usuario />
      </main>
    </Layout>
  );
}
