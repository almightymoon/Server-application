import React from "react";
import Hero from "./Hero";
import PricingCard from "./Pricing";
import HelpCard from "./HelpCard";
// import PaymanetCard from "./PaymanetCard";
// import Cardexample from "./Cardexample";

// import { Container } from "@mui/material";
function Index() {
  return (
    <>
      <div
        style={{
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginBottom: "10%",
        }}>
        <Hero />

        <PricingCard />

        <HelpCard />
      </div>
    </>
  );
}

export default Index;
