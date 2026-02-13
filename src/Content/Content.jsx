import React from 'react';
import cookiejar from '../images/Cookie.svg';
import styles from './Content.module.scss';

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.textBox}>
        <ul className={styles.list}>
          <li>
            <img src={cookiejar} alt="cookiejar" />
          </li>
          <li>
            <p className={styles.text}>
              <span>Dive into exciting </span>
              <span>categories.</span>
              <span>Discover new websites.</span>
            </p>
          </li>
        </ul>
        <button>Get Started</button>

        <img alt=""></img>
      </div>
    </div>
  );
}
