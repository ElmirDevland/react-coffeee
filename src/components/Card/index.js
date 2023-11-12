import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

const Card = ({ name, weight, price, img, country = false }) => {
  return (
    <div className={styles.card}>
      <Link to={'/ourcoffee/aboutit'}>
        <img src={img} alt="coffee" />
        <p>
          {name} {weight}
        </p>
        {country && <p>{country}</p>}
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default Card;
