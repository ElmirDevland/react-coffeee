import styles from './AboutIt.module.scss';

const About = () => {
  return (
    <div className={styles.AboutIt}>
      <div className={styles.img}>
        <img src="/img/aboutcoffee.jpg" alt="coffee" />
      </div>
      <div className={styles.aboutTitle}>
        <h3>About it</h3>
        <div className={styles.beans_img_black}>
          <img src="../img/icons/coffee-beans-black.svg" alt="coffeebeans" />
        </div>
        <div className={styles.description}>
          <h4>
            Country: <p>Brasil</p>
          </h4>
          <h4>
            Description:{' '}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </h4>
          <h4 className={styles.price}>
            Price:
            <p>16.99$</p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
