import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useActive } from "./hooks";

// Import other components
import Image from "./Image";

// Importing my own styled components
import { Container } from "../Components/Styled/Location.styled";
import { Grid } from "../Components/Styled/Grid.styled";

const pageVariants = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
}

const pageTransitions = {
  duration: 100
}

const Location = ({ title, elevation, desc, photos }) => {

  const {setActive} = useActive();

  useEffect(() => {
    setActive(title);
  }, [setActive, title]);

  return (
    <motion.div initial="out" animate="in" exit="out" 
    variants={pageVariants} transitions={pageTransitions}
    style={{overflowX: "hidden"}}>
      <Container>
        <div className='videoContainer'>
          <video
            style={{ pointerEvents: "none" }}
            key={elevation}
            autoPlay
            loop
            muted
          >
            <source src={elevation} type='video/mp4' />
          </video>
        </div>
        <div>
          <h1 className='title'>{title}</h1>
          <article>{desc}</article>
        </div>
        <Grid>
          {photos.map((photo, i) => (
            <Image photo={photo} />
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Location;
