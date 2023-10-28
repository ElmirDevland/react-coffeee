import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <ul>
          <li>Coffee house</li>
          <li>Our coffee</li>
          <li>For your pleasure</li>
        </ul>
      </div>
      <div className={styles.beans_img_black}>
        <img src="./img/icons/coffee-beans-black.svg" alt="coffeebeans" />
      </div>
    </>
  );
};

export default Footer;
