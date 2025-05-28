// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cubo de Rubik',
  tagline: '¡Hola y gracias por visitar esta web! Soy José, estudiante universitario, y esta página forma parte de mi Trabajo de Fin de Grado. Aquí te invito a descubrir el fascinante mundo del Cubo de Rubik, no solo como un rompecabezas, sino como un objeto de estudio matemático.',
  favicon: 'img/micubo-bg.png',

  // Set the production url of your site here
  url: 'https://josele03.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/CuboDeRubik/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'josele03', // Usually your GitHub org/user name.
  projectName: 'CuboDeRubik', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'base-mate',                           // Identificador único del plugin
        path: 'base-mate',                         // Carpeta de documentos
        routeBasePath: 'base_mate',                // Ruta pública (/base_mate)
        sidebarPath: require.resolve('./sidebarBM.js'), // Tu archivo de sidebar
      },
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/micubo-bg.png',
      navbar: {
        title: 'Inicio',
        logo: {
          alt: 'Mi Logo',
          src: 'img/micubo-bg.png',
        },
        items: [
          {to: '/juego', label: '¡Juega!', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/base_mate/introBM', label: 'Base Matemática', position: 'left'},
          {to: '/login/registro', label: 'Registrarse', position: 'right'},
          {to: '/login/inicio-sesion', label: 'Iniciar sesión', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contenido',
            items: [
              {
                label: 'Base Matemática',
                to: '/base_mate/introBM',
              },
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Juego',
                to: '/juego',
              },
            ],
          },
          {
            title: 'Sobre mí',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/josele03/CuboDeRubik',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jose-marquez-carques',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/josele_03',
              },
            ],
          },
          {
            title: 'Créditos',
            items: [
              { 
                label: 'Plantilla',
                href: 'https://github.com/facebook/docusaurus'
              },
              {
                label: 'Proceso Log-in y Base de Datos',
                href: 'https://firebase.google.com/docs/auth?hl=es-419'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Trabjo de Fin de Grado, Inc. Built with Docusaurus. José Márquez Carqués.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
