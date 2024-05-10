const Customer = require("../Model/customerSchema");



exports.customer = async ( { assign_to} )  => {
  console.log("assign_to",assign_to)
  return await Customer.findAll({ where: {
    assign_to: assign_to
} });
};

exports.count = async ( { assign_to} )  => {
  return await Customer.count({
    where: {
        assign_to: assign_to
    }
});
};

exports.allcustomer = async ()  => {
  return await Customer.findAll();
};




