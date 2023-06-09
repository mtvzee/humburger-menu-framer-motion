import { motion, Variants } from 'framer-motion';

const menuItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const MenuItem = () => {
  return (
    <motion.li
      className="space-x-4 flex items-center "
      variants={menuItemVariants}
    >
      <div className="w-10 h-10 border border-black rounded-full" />
      <div className="w-40 h-10 border border-black rounded-md" />
    </motion.li>
  );
};

export default MenuItem;
