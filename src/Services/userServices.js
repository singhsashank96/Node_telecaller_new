const User = require("../Model/userSchema");


exports.create = async (body) => {
  return await User.create(body);
};

exports.login = async ( { email, mobile } )  => {
  return await User.findOne({ where: {
    email,
    mobile
} });
};





