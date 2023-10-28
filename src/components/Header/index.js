import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header_nav}>
      <ul>
        <li>Coffee house</li>
        <li>Our coffee</li>
        <li>For your pleasure</li>
      </ul>
    </div>
  );
};

export default Header;
