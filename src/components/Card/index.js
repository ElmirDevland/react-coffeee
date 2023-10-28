import styles from './Card.module.scss';

const Card = ({ name, weight, price, img }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="coffee" />
      <p>
        {name} {weight}
      </p>
      <p>{price}</p>
    </div>
  );
};

export default Card;
