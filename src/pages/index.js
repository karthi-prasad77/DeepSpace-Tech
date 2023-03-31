import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="About Us"
        title="Who we are ?"
        text="Deep Space Technology is an advanced technology company that specializes in the development of web applications,
         websites, and various software solutions. Our team of highly skilled developers, designers, 
         and engineers are dedicated to providing our clients with bespoke solutions that meet their unique needs and requirements.
         

         At Deep Space Technology, we're always on the cutting edge of the latest trends and technologies, and we use this knowledge to develop innovative solutions that set our clients apart from the competition. 
         We're committed to building strong relationships with our clients and taking the time to understand their businesses, goals, and challenges."
        btnText="Start today"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle=" "
        title="About Our Work"
        text="At Deep Space Technology, we take pride in our track record of successfully delivering real-time 
        working applications for a diverse range of clients. From e-commerce platforms to powerful web applications with
         high levels of security and authentication, we've done it all"
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle=""
        title="Contact us"
        text="Deep Space Technology is a leading technology company that specializes in creating innovative solutions for businesses.
         From web and mobile app development to data analytics and beyond, our team of experts delivers custom solutions that drive growth and success.
         Contact us today to transform your business with our powerful technology solutions."
        btnText="Read more"
      />
      <Footer />
    </>
  );
};
