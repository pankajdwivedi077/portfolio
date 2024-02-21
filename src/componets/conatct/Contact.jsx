import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {

    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

 const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h72n6ig", 
        "template_hkhuxy4",
         formRef.current, {
        publicKey: "sN9MlB1GLJ6bU_5hB",
      })
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <a href="mailto:pankajdwivedi077@gmail.com">pankajdwivedi</a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <a href="tel:+917489371971">Phone no.</a>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form ref={formRef} onSubmit={sendEmail}>
        <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
