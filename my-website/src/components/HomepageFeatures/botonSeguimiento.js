import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useLocation } from '@docusaurus/router';

export default function BotonSeguimiento() {
  const [usuario, setUsuario] = useState(null);
  const [estado, setEstado] = useState(null);
  const location = useLocation();

  // Extraer solo el path relativo al tutorial (ignorando /CuboDeRubik/)
  const match = location.pathname.match(/\/docs\/[^\/]*/);
  const ruta = match ? match[0] : null;

  const tutorialIndexMap = {
    '/docs/intro': 0,
    '/docs/paso1': 1,
    '/docs/paso2': 2,
    '/docs/paso3': 3,
    '/docs/paso4': 4,
    '/docs/paso5': 5,
    '/docs/paso6': 6,
    '/docs/paso7': 7,
  };

  const index = tutorialIndexMap[ruta] ?? null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && index !== null) {
        const ref = doc(db, 'usuarios', user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setUsuario(user);
          setEstado(data?.Seguimiento?.[index] ?? false);
        }
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe();
  }, [index]);

  const marcarComoCompletado = async () => {
    if (!usuario || index === null) return;
    const ref = doc(db, 'usuarios', usuario.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) return;
    const data = snap.data();
    const nuevoSeguimiento = [...(data.Seguimiento || Array(8).fill(false))];
    nuevoSeguimiento[index] = true;
    await updateDoc(ref, { Seguimiento: nuevoSeguimiento });
    setEstado(true);
  };

  if (!usuario || index === null) return null;

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <button
        onClick={marcarComoCompletado}
        disabled={estado}
        style={{
          backgroundColor: estado ? '#ccc' : 'var(--ifm-color-primary)',
          color: estado ? 'black' : 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: estado ? 'default' : 'pointer'
        }}
      >
        {estado ? '¡Completado!' : 'Marcar como completado'}
      </button>
    </div>
  );
}
