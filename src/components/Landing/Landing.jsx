import React from 'react';
import styles from './Landing.module.css';
import logo from '../../assets/logoBlack.png';
import img1 from '../../assets/landingOne.png';
import img2 from '../../assets/landingTwo.png';

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.imgContainer}>
        <img src={img1} alt="img1" className={styles.img1} />
        <img src={img2} alt="img2" className={styles.img2} />
      </div>
    </div>
  );
}
