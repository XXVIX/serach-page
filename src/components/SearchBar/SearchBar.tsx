import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.css';

const SearchBar: React.FC = () => {
  return (
    <motion.div
      className={styles.searchContainer}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <FiSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search the universe..."
        className={styles.searchInput}
      />
    </motion.div>
  );
};

export default SearchBar;