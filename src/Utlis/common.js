// const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

exports.sendResponse = (res, code, message, data) => {
  const response = {
    status: {
      code,
      message,
    },
  };
  if (data) {
    response.data = data;
  }
  return res.status(code).json(response);
};


// // Middleware function to verify JWT token and attach user to request
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (token == null) {
//       return res.sendStatus(401);
//   }
//   jwt.verify(token, process.env.JWT_KEY, (err, user) => {
//       if (err) {
//           return res.sendStatus(403);
//       }
//       req.user = user;
//       next();
//   });
// }

// module.exports = {
//   authenticateToken
// };