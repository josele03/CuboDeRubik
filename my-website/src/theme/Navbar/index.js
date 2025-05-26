
import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
export default function Navbar() {
  return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
/*
import React, { useEffect, useState } from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import Link from '@docusaurus/Link';

export default function Navbar() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <NavbarLayout>
      <NavbarContent />
      <div className="navbar__items navbar__items--right" style={{ marginRight: '1rem' }}>
        {usuario ? (
          <Link className="navbar__item navbar__link" to="/login/perfil">
            Mi perfil
          </Link>
        ) : (
          <>
            <Link className="navbar__item navbar__link" to="/login/registro">
              Registrarse
            </Link>
            <Link className="navbar__item navbar__link" to="/login/inicio-sesion">
              Iniciar sesión
            </Link>
          </>
        )}
      </div>
    </NavbarLayout>
  );
}
*/