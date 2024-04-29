import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "../components/LandingPage/header/Header";
import Footer from "../components/LandingPage/Footer/Footer";
import Chatbot from "../components/LandingPage/ChatBot/Chatbot";
// import Navbarone from "../components/LandingPage/header/Header1";

const LandingLayout = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const chatRef = useRef(null);
  const handleChatOpen = () => {
    setChatOpen(true);
  };

  const handleChatClose = () => {
    setChatOpen(false);
  };

  // Event listener to close the chatbox if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        handleChatClose();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatRef]);

  return (
    <div>
      <Navbar />

      <Outlet />
      <div>
        {/* Other components of your website */}
        {chatOpen && (
          <div ref={chatRef}>
            <Chatbot onClose={handleChatClose} />
          </div>
        )}
        {!chatOpen && (
          <Button
            onClick={handleChatOpen}
            style={{
              Color: "",
              background:
                "linear-gradient(180deg, rgba(37, 30, 118, 0.89) 0%, rgba(59, 49, 222, 0.56) 100%) ",
              with: "90px",
              height: "90px",
              borderRadius: "50%",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: "1000",
            }}>
            ChatBot
          </Button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LandingLayout;
