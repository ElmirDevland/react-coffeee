import { useState } from 'react';
import styles from './AboutOurBeans.module.scss';
import Card from '../Card';

const AboutOurBeans = () => {
  const [inputValue, setInputValue] = useState('');
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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filtered, setFiltered] = useState(false);

  const onFiltered = (e) => {
    setFilteredProducts(
      products.filter(
        (item) => item.country.toLowerCase() === e.target.name.toLowerCase()
      )
    );
    setFiltered(true);
  };
  return (
    <>
      <div className={styles.about_beans}>
        <div className={styles.img}>
          <img src="img/aboutimg.png" alt="about" />
        </div>
        <div className={styles.our_beans}>
          <h3>About our beans</h3>
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
      <div className={styles.products}>
        <div className={styles.search_and_filter}>
          <div className={styles.search}>
            <p>Looking for</p>
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              value={inputValue}
              placeholder="start typing here..."
            />
          </div>
          <div className={styles.filter}>
            <p>Or filter</p>
            <div className={styles.buttons}>
              <button name="brazil" onClick={onFiltered}>
                Brazil
              </button>
              <button name="kenya" onClick={onFiltered}>
                Kenya
              </button>
              <button name="colombia" onClick={onFiltered}>
                Colombia
              </button>
              {filtered && (
                <button
                  onClick={() => {
                    setFiltered(false);
                  }}
                  className={styles.button_reset}
                >
                  &#10006;
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          {(filtered &&
            filteredProducts.map((items, i) => <Card key={i} {...items} />)) ||
            products
              .filter((item) =>
                item.name.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((items, i) => <Card key={i} {...items} />)}
        </div>
      </div>
    </>
  );
};

export default AboutOurBeans;
