import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
   <>
   <NavBar/>
   <Hero/>
   <AboutMe/>
   <Services/>
   <Projects/>
   <Testimonials/>
   <Contact/>
   <Footer/>
   </>
  );
}
