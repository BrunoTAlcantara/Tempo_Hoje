import P from 'prop-types';
import * as Styled from './styles';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export const AnimationPage = ({ children, repeat }) => {
  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ repeat: 1, duration: 2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

AnimationPage.propTypes = {
  children: P.node.isRequired,
  repeat: P.node.isRequired,
};
