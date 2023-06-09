import { motion, Variants } from 'framer-motion';
import MenuItem from './MenuItem';

const navigationVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: -1,
    },
  },
};

const Navigation = () => {
  return (
    <motion.ul
      className="absolute top-20 left-10 space-y-2"
      variants={navigationVariants}
    >
      {[...Array(5)].map((_, i) => (
        <MenuItem key={i} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
