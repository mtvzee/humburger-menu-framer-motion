import Hamburger from 'hamburger-react';
import type { NextPage } from 'next';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import Navigation from '../src/components/Navigation';

const sidebarVariants: Variants = {
  open: {
    clipPath: `circle(1000px at 40px 40px )`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(30px at 40px 40px)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const Home: NextPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="h-screen bg-blue-500">
      <motion.nav
        className="absolute top-0 bottom-0 left-0"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div
          className="bg-white absolute top-0 left-0 bottom-0 w-[300px]"
          variants={sidebarVariants}
        />
        <span className="absolute top-4 left-4">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </span>
        <Navigation />
      </motion.nav>
    </div>
  );
};

export default Home;
