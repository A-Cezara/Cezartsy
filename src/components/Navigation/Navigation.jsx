import React from 'react';
import styles from './Navigation.module.css';
import { FaChevronDown, FaBars } from 'react-icons/fa';

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>
          Products <FaChevronDown style={{ marginLeft: '8px' }} />
        </li>
      </ul>
    </div>
  );
}
