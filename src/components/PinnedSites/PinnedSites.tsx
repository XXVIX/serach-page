import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion';
import {
  FaGithub,
  FaYoutube,
  FaRedditAlien,
  FaFigma,
  FaCodepen,
} from 'react-icons/fa';
import styles from './PinnedSites.module.css';

interface Site {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
}

const sites: Site[] = [
  { id: 1, name: 'GitHub', url: 'https://github.com', icon: <FaGithub /> },
  { id: 2, name: 'YouTube', url: 'http://googleusercontent.com/youtube.com/2', icon: <FaYoutube /> },
  { id: 3, name: 'Codepen', url: 'https://codepen.io', icon: <FaCodepen /> },
  { id: 4, name: 'Reddit', url: 'https://reddit.com', icon: <FaRedditAlien /> },
  { id: 5, name: 'Figma', url: 'https://figma.com', icon: <FaFigma /> },
];

interface SiteIconProps {
  site: Site;
  mouseX: MotionValue<number>;
}

const SiteIcon = ({ site, mouseX }: SiteIconProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);
  const scaleSpring = useSpring(scale, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div ref={ref} className={styles.iconContainer} style={{ scale: scaleSpring }}>
      <a href={site.url} target="_blank" rel="noopener noreferrer" className={styles.siteLink}>
        {site.icon}
        <span className={styles.tooltip}>{site.name}</span>
      </a>
    </motion.div>
  );
};

const PinnedSites = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={styles.dockContainer}
    >
      {sites.map((site) => (
        <SiteIcon site={site} key={site.id} mouseX={mouseX} />
      ))}
    </motion.div>
  );
};

export default PinnedSites;