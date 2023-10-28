import styles from './AboutCoffee.module.scss';
import Header from '../Header';

const AboutCoffee = () => {
  return (
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
  );
};

export default AboutCoffee;
