import React from "react";
import { ZoomStyled } from "./Styled/Zoom.styled";
import { motion } from "framer-motion";
import { useZoom } from "./hooks";

const Zoom = ({ clicked }) => {
  const { setZoom } = useZoom();
  return (
    <ZoomStyled onClick={() => setZoom(false)}>
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
