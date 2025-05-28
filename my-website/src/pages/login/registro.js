// src/pages/registro.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { useHistory } from '@docusaurus/router';
import { doc, setDoc } from 'firebase/firestore';



export default function Registro() {
  const [formData, setFormData] = useState({nombre: '', correo: '', contraseña: '' });
  const [mensaje, setMensaje] = useState('');
  const history = useHistory();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(auth, formData.correo, formData.contraseña);
      setMensaje('¡Usuario registrado correctamente!');
      // Guarda nombre en Firestore
      await setDoc(doc(db, "usuarios", cred.user.uid), {
        nombre: formData.nombre,
        correo: formData.correo,
        creadoEn: new Date(),
        Seguimiento: Array(8).fill(false) 
      });
      history.push('/CuboDeRubik/');
    } catch (err) {
      setMensaje('Error: ' + err.message);
    }
  };

  return (
    <Layout title="Registro">
      <main style={{ padding: '2rem' }}>
        <div style={{ maxWidth: 400, margin: 'auto' }}>
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required style={{ width: '100%', padding: '8px', marginBottom: '1rem' }} />
            <input type="email" name="correo" onChange={handleChange} placeholder="Correo" required style={{ width: '100%', padding: '8px', marginBottom: '1rem' }} />
            <input type="password" name="contraseña" onChange={handleChange} placeholder="Contraseña" required style={{ width: '100%', padding: '8px', marginBottom: '1rem' }} />
            <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'var(--ifm-color-primary-lighter)', color: '#fff', border: 'none' }}>Registrarse</button>
          </form>
          {mensaje && <p>{mensaje}</p>}
        </div>
      </main>
    </Layout>
  );
}
