import React from 'react';
import styles from './Content.module.scss';

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.textBox}>
        <p className={styles.text}>
          <div>Dive into exciting </div>
          <div>categories.</div>
          <div>Discover new websites.</div>
        </p>
        <img alt=""></img>
      </div>
    </div>
  );
}
