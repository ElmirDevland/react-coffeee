import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import styles from './OurCoffee.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import AboutOurBeans from './AboutOurBeans';
import AboutIt from '../AboutIt';

const OurCoff = () => {
  return (
    <div className={styles.our_coffee}>
      <Header />
      <h1>Our Coffee</h1>
      <Routes>
        <Route path="/" element={<AboutOurBeans />} />
        <Route path="/aboutit" element={<AboutIt />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default OurCoff;
