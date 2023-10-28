import styles from './OurBest.module.scss';
import Card from '../Card';

const products = [
  {
    name: 'Solimo Coffee Beans',
    weight: '2 kg',
    price: '10.73$',
    img: 'img/coffee/solimo.png',
  },
  {
    name: 'Presto Coffee Beans',
    weight: '1 kg',
    price: '15.99$',
    img: 'img/coffee/presto.png',
  },
  {
    name: 'AROMISTICO Coffee',
    weight: '1 kg',
    price: '6.99$',
    img: 'img/coffee/aromistico.png',
  },
];

const OurBest = () => {
  return (
    <div className={styles.our_best}>
      <h3>Our best</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '802px',
          margin: '0 auto',
        }}
      >
        {products.map((obj, i) => (
          <Card key={i} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default OurBest;
