import React from 'react';
import Profile from '../Profile/Profile';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Meow
      </div>
      <Profile />
    </header>
  );
};

export default Header;