import styles from './MainPage.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import Card from '../Card';

const MainPage = ({ products }) => {
  return (
    <>
      <div className={styles.header_about}>
        <Header />
        <div style={{ marginTop: '85px' }}>
          <h1>Everything You Love About Coffee</h1>
          <div className={styles.beans_img}>
            <img src="./img/icons/coffee-beans-white.svg" alt="coffeebeans" />
          </div>
          <h3>We makes every day full of energy and taste</h3>
          <h3>Want to try our beans?</h3>
          <button>More</button>
        </div>
      </div>
      <div className={styles.about_us}>
        <h3>About Us</h3>
        <div className={styles.beans_img_black}>
          <img src="./img/icons/coffee-beans-black.svg" alt="coffeebeans" />
        </div>
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as
          landlord horrible. Afraid at highly months do things on at. Situation
          recommend objection do intention so questions. As greatly removed
          calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song
          that held help face.
        </p>
        <p>
          Now residence dashwoods she excellent you. Shade being under his bed
          her, Much read on as draw. Blessing for ignorant exercise any yourself
          unpacked. Pleasant horrible but confined day end marriage. Eagerness
          furniture set preserved far recommend. Did even but nor are most gave
          hope. Secure active living depend son repair day ladies now.
        </p>
      </div>
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
      <Footer />
    </>
  );
};

export default MainPage;
