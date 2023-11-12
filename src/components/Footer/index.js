import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <ul>
          <Link to={'/'}>
            <li>Coffee house</li>
          </Link>
          <Link to={'/ourcoffee'}>
            <li>Our coffee</li>
          </Link>
          <Link to={'/foryourpleasure'}>
            <li>For your pleasure</li>
          </Link>
        </ul>
      </div>
      <div className={styles.beans_img_black}>
        <img src="../img/icons/coffee-beans-black.svg" alt="coffeebeans" />
      </div>
    </>
  );
};

export default Footer;
