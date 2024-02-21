import "./app.scss"
import Hero from "./componets/hero/Hero";
import Navbar from "./componets/navbar/Navbar";
import Parallax from "./componets/parallax/Parallax";
import Services from "./componets/services/Services";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services /></section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    
  </div>;
};

export default App;