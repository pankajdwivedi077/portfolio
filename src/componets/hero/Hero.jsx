import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat:Infinity
    }
  }
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Pankaj Dwivedi</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <a href="https://github.com/pankajdwivedi077">See the Latest Works</a>
            </motion.button>
            <motion.button variants={textVariants}> <a href="mailto:pankajdwivedi077@gmail.com">Contact Me</a></motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton"  src="/scroll.png" alt="" />
        </motion.div>
      </div>

      <div className="imageContainer">
        <img src="/profile.png" alt="pankaj profile pic" />
      </div>
    </div>
  );
};

export default Hero;
