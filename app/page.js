'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hader from "./components/Hader";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hader/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  );
}
