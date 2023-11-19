import { Routes, Route } from 'react-router-dom';
import Header from '../Header';
import AboutOurGoods from './AboutOurGoods';
import AboutIt from '../AboutIt';
import Footer from '../Footer';
import styles from './ForYourPleasure.module.scss';

const ForYourPleasure = () => {
  return (
    <div className={styles.fou_pleasure}>
      <Header />
      <h1>For your pleasure</h1>
      <Routes>
        <Route path="/" element={<AboutOurGoods />} />
        <Route path="/aboutit" element={<AboutIt />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default ForYourPleasure;
