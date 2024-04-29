import React, { useState } from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Picker from "emoji-picker-react";

function WebHostingChatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const commands = {
    help: 'Type "plans" to view hosting plans, "support" for help, or "contact" to reach us.',
    plans: "We offer Basic, Premium, and Enterprise hosting plans.",
    support:
      'Our support team is available 24/7. Type "contact" to get in touch with us.',
    contact:
      "You can contact us at support@yourwebhosting.com or call us at 1-800-123-4567.",
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendClick = () => {
    const trimmedInput = input.trim().toLowerCase();
    const response =
      commands[trimmedInput] ||
      'Sorry, I did not understand that. Type "help" for a list of commands.';
    setMessages(messages.concat({ text: input, from: "user" }));
    setMessages(messages.concat({ text: response, from: "bot" }));
    setInput("");
  };

  const handleClearChat = () => {
    setMessages([]); // This will clear the chat history
  };

  const onEmojiClick = (event, emojiObject) => {
    setInput(input + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        width: 350,
        maxHeight: "calc(100% - 40px)",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "background.paper",
        zIndex: 1000,
      }}>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          padding: 1,
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Typography variant='subtitle1'>Chat with us!</Typography>
        <IconButton onClick={handleClearChat} color='inherit'>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ overflow: "auto", flexGrow: 1 }}>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={message.text}
              secondary={message.from === "bot" ? "WebHosting Chatbot" : "You"}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", alignItems: "center", padding: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", padding: 1 }}>
          <IconButton onClick={toggleEmojiPicker}>
            <EmojiEmotionsIcon />
          </IconButton>
          {showEmojiPicker && <Picker onEmojiClick={onEmojiClick} />}
          <TextField
            fullWidth
            size='small'
            variant='outlined'
            placeholder='Write a message'
            value={input}
            onChange={handleInputChange}
            onKeyPress={(event) => event.key === "Enter" && handleSendClick()}
            // ... other props
          />
          <IconButton color='primary' onClick={handleSendClick}>
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default WebHostingChatbot;
