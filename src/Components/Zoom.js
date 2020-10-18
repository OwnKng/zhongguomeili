import React from "react";
import { ZoomStyled } from "./Styled/Zoom.styled";
import { motion } from "framer-motion";

const Zoom = ({ clicked, setClicked }) => {
  return (
    <ZoomStyled onClick={() => setClicked(false)}>
      <div className='inner'>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          src={clicked}
          alt=''
        />
      </div>
    </ZoomStyled>
  );
};

export default Zoom;
