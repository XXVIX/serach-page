import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion'; // Вот так
import Clock from './components/Clock/Clock';
import SearchBar from './components/SearchBar/SearchBar';
import Profile from './components/Profile/Profile';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import PinnedSites from './components/PinnedSites/PinnedSites';
import styles from './App.module.css';

function App() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <>
      <AnimatedBackground />
      <motion.div
        className={styles.appContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.logo} variants={itemVariants}>
          Meow
        </motion.h1>
        <Profile />

        <motion.div className={styles.clockWrapper} variants={itemVariants}>
          <Clock />
        </motion.div>

        <motion.div className={styles.searchBarWrapper} variants={itemVariants}>
          <SearchBar />
        </motion.div>

        <motion.div variants={itemVariants}>
          <PinnedSites />
        </motion.div>
      </motion.div>
    </>
  );
}

export default App;