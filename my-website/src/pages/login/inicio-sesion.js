import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useHistory } from '@docusaurus/router';


export default function Login() {
  const [credentials, setCredentials] = useState({ correo: '', contraseña: '' });
  const [mensaje, setMensaje] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, credentials.correo, credentials.contraseña);
      setMensaje('Sesión iniciada con éxito');
      history.push('/CuboDeRubik/');
    } catch (err) {
      setMensaje('Error: ' + err.message);
    }
  };

  return (
    <Layout title="Iniciar sesión">
      <main style={{ padding: '2rem' }}>
        <div style={{ maxWidth: 400, margin: 'auto' }}>
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" name="correo" onChange={handleChange} placeholder="Correo" required style={{ width: '100%', padding: '8px', marginBottom: '1rem' }} />
            <input type="password" name="contraseña" onChange={handleChange} placeholder="Contraseña" required style={{ width: '100%', padding: '8px', marginBottom: '1rem' }} />
            <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'var(--ifm-color-primary-lighter)', color: '#fff', border: 'none' }}>Entrar</button>
          </form>
          {mensaje && <p>{mensaje}</p>}
        </div>
      </main>
    </Layout>
  );
}
