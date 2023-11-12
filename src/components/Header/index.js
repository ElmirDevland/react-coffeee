import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header_nav}>
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
  );
};

export default Header;
