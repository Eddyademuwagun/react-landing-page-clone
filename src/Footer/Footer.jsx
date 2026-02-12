import React from 'react';
import cookiejar from '../images/Cookie.svg';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <ul className={styles.list}>
          <li className={styles.smallFont}>
            <img src={cookiejar} alt="cookiejar" />© 2026 Cookiejar.co
          </li>

          <li>
            <h5> Product</h5>
            <div>Add Site</div>
            <div>Discover </div>
            <div>Categories</div>
          </li>

          <li>
            <h5>Company</h5>
            <div>About</div>
            <div>Contact</div>
          </li>

          <li>
            <h5>Support</h5>
            <div>Privacy </div>

            <div>Sponsorship</div>
          </li>

          <li>
            <h5>Follow</h5>
            Twitter
          </li>
        </ul>
      </div>
    </footer>
  );
}
