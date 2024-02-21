import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {

  const ref = useRef()

  const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
    //   animate="animate"
    //   whileInView="animate"
    ref={ref}
    animate={ "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p></p>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Javascript Developer</h2>
          <p>Creating dynamic web experiences through JavaScript, shaping digital interactions, and crafting intuitive user interfaces.</p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front End Developer</h2>
          <p>Crafting responsive, visually appealing, and interactive user interfaces using React for dynamic web applications. </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full Stack Developer</h2>
          <p>
Crafting end-to-end digital solutions with MERN stack, driving seamless user experiences and robust backend functionalities. </p>
          {/* <button>Go</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Software Engineer</h2>
          <p>Designing and implementing scalable software solutions, leveraging various technologies to tackle complex problems and drive innovation.</p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
