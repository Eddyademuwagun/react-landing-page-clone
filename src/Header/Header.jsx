import React from 'react';
import cookiejar from './coooooookiiiieeee.svg';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <nav>
        <img src={cookiejar} alt="cookiejar" />
        <div className={styles.logo}>Cookiejar</div>
        <div className={styles.burger}>☰</div>
      </nav>
    </header>
  );
}
