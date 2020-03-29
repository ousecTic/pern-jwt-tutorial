const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(user_id) {
  const payload = {
    user: {
      id: user_id
    }
  };
  
//fthe tutorial code was like this below for the jwtGenerator
  
//   function jwtGenerator(user_id) {
//   const payload = {
//     user: user_id
//   };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports = jwtGenerator;
