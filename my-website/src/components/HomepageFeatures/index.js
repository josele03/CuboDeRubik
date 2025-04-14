import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: '¡Juega!',
    image: require('@site/static/img/micubo-bg.png').default,
    description: (
      <>
        Podrás experimentar con un Cubo de Rubik virtual: probar movimientos, ver su efecto en tiempo real 
        y comprobar algoritmos que hayas aprendido. ¡Ideal para poner en práctica lo que vas aprendiendo!
      </>
    ),
    link: '/juego',
  },
  {
    title: 'Tutorial',
    image: require('@site/static/img/tutorial-bg.png').default,
    description: (
      <>
        Tanto si nunca has tocado un cubo como si ya conoces lo básico, aquí aprenderás una forma clara 
        y estructurada de resolverlo, con métodos pensados para principiantes.
      </>
    ),
    link: '/docs/intro',
  },
  {
    title: 'Base matemática',
    image: require('@site/static/img/maths-bg.png').default,
    description: (
      <>
        Exploraremos los fundamentos algebraicos y combinatorios que explican cómo funciona el cubo, 
        desde los grupos de permutaciones hasta la notación de movimientos.
      </>
    ),
    link: '/base_mate',
  },
];

function Feature({image, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
