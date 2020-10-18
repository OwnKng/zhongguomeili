import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Image = ({ photo, setClicked }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-20% 0%",
  });

  return (
    <motion.img
      ref={ref}
      key={Object.values(photo)}
      className={Object.keys(photo)}
      animate={{
        scale: inView ? 1 : 0,
        opacity: inView ? 1 : 0,
      }}
      onClick={() => setClicked(Object.values(photo))}
      whileHover={{
        scale: 1.1,
      }}
      src={Object.values(photo)}
      alt=''
    />
  );
};

export default Image;
