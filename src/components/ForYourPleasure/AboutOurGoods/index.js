import styles from './AboutOurGoods.module.scss';
import Card from '../../Card';

const AboutOurGoods = () => {
  const products = [
    {
      name: 'AROMISTICO Coffee',
      weight: '1 kg',
      price: '6.99$',
      country: 'Brazil',
      img: 'img/coffee/aromistico.png',
    },
    {
      name: 'Solimo Coffee',
      weight: '1 kg',
      price: '6.99$',
      country: 'Brazil',
      img: 'img/coffee/aromistico.png',
    },
    {
      name: 'AROMISTICO Coffee',
      weight: '1 kg',
      price: '6.99$',
      country: 'Kenya',
      img: 'img/coffee/aromistico.png',
    },
    {
      name: 'Nicaragua Coffee',
      weight: '1 kg',
      price: '6.99$',
      country: 'Colombia',
      img: 'img/coffee/aromistico.png',
    },
    {
      name: 'Presto Coffee',
      weight: '1 kg',
      price: '6.99$',
      country: 'Brazil',
      img: 'img/coffee/aromistico.png',
    },
    {
      name: 'AROMISTICO Coffee',
      weight: '1 kg',
      price: '6.99$',
      country: 'Colombia',
      img: 'img/coffee/aromistico.png',
    },
  ];

  return (
    <>
      <div className={styles.about_goods}>
        <div className={styles.img}>
          <img src="img/aboutgoods.png" alt="about" />
        </div>
        <div className={styles.our_beans}>
          <h3>About our goods</h3>
          <div className={styles.beans_img_black}>
            <img src="./img/icons/coffee-beans-black.svg" alt="coffeebeans" />
          </div>
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </p>
          <p>
            Afraid at highly months do things on at. Situation recommend
            objection do intention
            <br /> so questions. <br /> As greatly removed calling pleased
            improve an. Last ask him cold feel
            <br /> met spot shy want. Children me laughing we prospect answered
            followed. At it went
            <br /> is song that held help face.
          </p>
        </div>
      </div>
      <div className={styles.cards}>
        {products.map((item, i) => (
          <Card {...item} key={i} />
        ))}
      </div>
    </>
  );
};

export default AboutOurGoods;
