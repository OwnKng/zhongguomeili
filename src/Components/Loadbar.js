import React from 'react';
import {Progress} from '../Components/Styled/App.styled'
import {motion, useViewportScroll} from 'framer-motion';


const Loadbar = () => {
    const { scrollYProgress } = useViewportScroll()

    return (
        <Progress>
            <motion.div style={{ 
                scaleX: scrollYProgress, 
                height: "100%", 
                background: "rgb(220, 220, 220)" }} />
        </Progress>
    )
}

export default Loadbar;