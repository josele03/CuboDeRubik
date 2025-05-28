// src/components/Usuario.js
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useHistory } from '@docusaurus/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
 
export default function Usuario() {
  const [usuario, setUsuario] = useState(null);
  const history  = useHistory ();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    return () => unsubscribe(); // cleanup al desmontar
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUsuario(null);
    history.push('/CuboDeRubik/');
  };

  if (!usuario) {
    return <p>No has iniciado sesión.</p>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <p>Sesión iniciada como: <strong>{usuario.email}</strong></p>
      <button onClick={handleLogout} style={{
        padding: '10px 20px',
        backgroundColor: 'crimson',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Cerrar sesión
      </button>
    </div>
  );
}
