import React from 'react';
import { motion } from 'framer-motion';
import styles from './Profile.module.css';

const avatarUrl = 'https://i.pinimg.com/736x/ef/dd/62/efdd62caa33486526d4ff16aeba044e7.jpg';

const Profile: React.FC = () => {
  return (
    <motion.div
      className={styles.profileContainer}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <img src={avatarUrl} alt="User Avatar" className={styles.avatar} />
    </motion.div>
  );
};

export default Profile;