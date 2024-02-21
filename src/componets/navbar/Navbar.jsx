import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Pankaj Dwivedi
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/pankaj-dwivedi-/">
            <img src="/linkedin.png" alt="" height={64} width={64} />
          </a>
          <a href="https://github.com/pankajdwivedi077">
            <img src="/github.png" alt="" height={64} width={64} />
          </a>
          <a href="https://www.instagram.com/pankaj.bellchan/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://twitter.com/BellChan00">
            <img src="/twitter.png" alt="" height={64} width={64} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
