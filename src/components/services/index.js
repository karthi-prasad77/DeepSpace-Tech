import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Data Analytics</ServicesH2>
          <ServicesP>
          We help businesses leverage data with custom analytics solutions. 
          From AI to predictive modeling, we deliver insights for success.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Mobile App</ServicesH2>
          <ServicesP>
          We create custom mobile apps for businesses using the latest tools and technologies.
          Contact us for expert mobile solutions.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Website & Webapp</ServicesH2>
          <ServicesP>
          We develop custom websites and web apps for exceptional user experience and business growth.
          Contact us for expert web solutions..
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
