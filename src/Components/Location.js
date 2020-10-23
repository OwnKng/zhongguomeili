import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import other components
import Image from "./Image";

// Importing my own styled components
import { Container } from "../Components/Styled/Location.styled";
import { Grid } from "../Components/Styled/Grid.styled";

const Location = ({ setClicked, title, elevation, desc, photos }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0%",
  });

  return (
    <>
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
        <motion.div
          key={title}
          className='intro'
          ref={ref}
          animate={{ opacity: inView ? 1 : 0 }}
        >
          <h1 className='title'>{title}</h1>
          <article>{desc}</article>
        </motion.div>
        <Grid>
          {photos.map((photo, i) => (
            <Image photo={photo} setClicked={setClicked} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Location;
