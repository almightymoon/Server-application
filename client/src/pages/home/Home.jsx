import React from "react";

import Header from "../../components/LandingPage/header/Header";
import Hero from "../../components/LandingPage/Hero/index";
import OurOffers from "../../components/LandingPage/Ourservices/OurOffers.jsx";
import Managment from "../../components/LandingPage/Managment/index";
import PricingCard from "../../components/LandingPage/Hostingplan/PricingCard";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurOffers />
      <PricingCard />
      <Managment />
    </>
  );
}
