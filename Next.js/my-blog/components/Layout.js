import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Blog</h1>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>© 2023 My Blog</p>
      </footer>
    </div>
  );
};

export default Layout;
