// controllers/auth.controller.js
const User = require("../models/user");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const axios = require("config")

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const role = "normal";
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered  successfully" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Email not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Ensure process.env.JWT_SECRET is properly set and contains a valid secret key
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const signinController = async(req, res) => {
  if(req.body.googleAccessToken){
      // gogole-auth
      const {googleAccessToken} = req.body;

      axios
          .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
              "Authorization": `Bearer ${googleAccessToken}`
          }
      })
          .then(async response => {
              const firstName = response.data.given_name;
              const lastName = response.data.family_name;
              const email = response.data.email;
              const picture = response.data.picture;

              const existingUser = await User.findOne({email})

              if (!existingUser) 
              return res.status(404).json({message: "User don't exist!"})

              const token = jwt.sign({
                  email: existingUser.email,
                  id: existingUser._id
              }, config.get("JWT_SECRET"), {expiresIn: "1h"})
      
              res
                  .status(200)
                  .json({result: existingUser, token})
                  
          })
          .catch(err => {
              res
                  .status(400)
                  .json({message: "Invalid access token!"})
          })
  }else{
      // normal-auth
      const {email, password} = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
      try {
          const existingUser = await User.findOne({email})
  
          if (!existingUser) 
              return res.status(404).json({message: "User don't exist!"})
  
          const isPasswordOk = await bcrypt.compare(password, existingUser.password);
  
          if (!isPasswordOk) 
              return res.status(400).json({message: "Invalid credintials!"})
  
          const token = jwt.sign({
              email: existingUser.email,
              id: existingUser._id
          }, process.env.JWT_SECRET,
          { expiresIn: "1h" })
  
          res
              .status(200)
              .json({result: existingUser, token})
      } catch (err) {
          res
              .status(500)
              .json({message: "Something went wrong!"})
      }
  }

}

const signupController = async(req, res) => {
  if (req.body.googleAccessToken) {
      const {googleAccessToken} = req.body;

      axios
          .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
              "Authorization": `Bearer ${googleAccessToken}`
          }
      })
          .then(async response => {
              const firstName = response.data.given_name;
              const lastName = response.data.family_name;
              const email = response.data.email;
              const picture = response.data.picture;

              const existingUser = await User.findOne({email})

              if (existingUser) 
                  return res.status(400).json({message: "User already exist!"})

              const result = await User.create({verified:"true",email, firstName, lastName, profilePicture: picture})

              const token = jwt.sign({
                  email: result.email,
                  id: result._id
              }, config.get("JWT_SECRET"), {expiresIn: "1h"})

              res
                  .status(200)
                  .json({result, token})
          })
          .catch(err => {
              res
                  .status(400)
                  .json({message: "Invalid access token!"})
          })

  } else {
      // normal form signup
      const {email, password, confirmPassword, firstName, lastName} = req.body;

      try {
          if (email === "" || password === "" || firstName === "" || lastName === "" && password === confirmPassword && password.length >= 4) 
              return res.status(400).json({message: "Invalid field!"})

          const existingUser = await User.findOne({email})

          if (existingUser) 
              return res.status(400).json({message: "User already exist!"})

          const hashedPassword = await bcrypt.hash(password, 12)

          const result = await User.create({email, password: hashedPassword, firstName, lastName})

          const token = jwt.sign({
              email: result.email,
              id: result._id
          }, config.get("JWT_SECRET"), {expiresIn: "1h"})

          res
              .status(200)
              .json({result, token})
      } catch (err) {
          res
              .status(500)
              .json({message: "Something went wrong!"})
      }

  }
}

module.exports = { signup, signin, signupController, signinController };
