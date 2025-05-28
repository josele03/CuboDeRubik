// sidebarBM.js

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    baseMateSidebar: [
      {
        type: 'doc',
        id: 'introBM', // debe coincidir con el id del .md
        label: 'Base Matemática',
      },
      {
        type: 'doc',
        id: 'punto1', // debe coincidir con el id del .md
        label: 'Conjuntos y Funciones',
      },
      // Puedes añadir más temas aquí
    ],
  };
  
  module.exports = sidebars;
  