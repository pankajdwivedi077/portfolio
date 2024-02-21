import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Ace-Estate",
    img: "/13.png",
    alt: "Ace-Estate-img",
    link: "https://ace-estate.onrender.com/",
    description:
      "Ace Estate is a cutting-edge real estate platform that brings simplicity and efficiency to the process of finding your perfect place to live. Our platform is built on the robust MERN (MongoDB, Express, React, and Node.js) stack, harnessing the power of modern web technologies to provide an exceptional user experience.",
  },
  {
    id: 2,
    title: "VisualVibes",
    alt: "VisualVibes-img",
    img: "/12.png",
    link: "https://visual-vibes.vercel.app/auth",
    description:
      "VisualVibes is a web application inspired by Instagram, built using React, Firebase, and Chakra UI. It provides users with a platform to share images and interact with each other through likes, comments, and more.",
  },
  {
    id: 3,
    title: "Chat-app",
    alt: "Chat-app-img",
    img: "/1.png",
    link: "https://chat-app-p6yi.onrender.com/login",
    description:
      "A real-time chat application built with [React, Express.js Socket.io] that allows users to communicate with each other instantly.",
  },
  {
    id: 4,
    title: "Sidcup css clone",
    alt: "Sidcup css clone img",
    img: "/10.png",
    link: "https://pankajdwivedi077.github.io/sidcup-css-clone/",
    description: "Sidcup css clone.",
  },
];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <section >
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer" ref={ref}>
                <img src={item.img} alt={item.alt} />
              </div>
              <motion.div className="textContainer" >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.link}><button>See Demo</button></a>
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    const Portfolio = () => {
        const ref = useRef();
      
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["end end", "start start"],
        });
      
        const scaleX = useSpring(scrollYProgress, {
          stiffness: 100,
          damping: 30,
        });

        return (
            <div className="portfolio" ref={ref}>
              <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
              </div>
              {items.map((item) => (
                <Single item={item} key={item.id} />
              ))}
            </div>
          );
        };

export default Portfolio;
