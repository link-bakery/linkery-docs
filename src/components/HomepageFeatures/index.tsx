import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Create your Linkery!',
    image: require('@site/static/img/logo-no-bg.png').default,
    description: (
      <>
        Easy to host your own Link-Bakery! Just pull
        the repo, start it and create your custom links!
      </>
    ),
  },
  {
    title: 'Open source',
    image: require('@site/static/img/logo-no-bg.png').default,
    description: (
      <>
        Linkery is fully open source! So everyone can work
        on it to make it better and bugfree!
      </>
    ),
  },
  {
    title: 'Its free!',
    image: require('@site/static/img/logo-no-bg.png').default,
    description: (
      <>
        Every feature is completely free! Your data stays your data and
        never leaves your server!
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
