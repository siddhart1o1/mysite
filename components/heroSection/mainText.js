import React from 'react'
import { AnimatedText } from './AnimatedText';
import TextGradientComponent from "./coloredText/textGradiant";
import { motion } from "framer-motion";

export default function MainText() {
  return (
    <div>
      <div className="App">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ stiffness: 60 }}
        >
          <AnimatedText textColor="#242423" overlayColor="#CFDBD5">
            <div>
              <h1>HI, I'M</h1>
              <h1>SIDDHARTH</h1>
            </div>
          </AnimatedText>
          <TextGradientComponent />
        </motion.div>
      </div>
    </div>
  );
}
