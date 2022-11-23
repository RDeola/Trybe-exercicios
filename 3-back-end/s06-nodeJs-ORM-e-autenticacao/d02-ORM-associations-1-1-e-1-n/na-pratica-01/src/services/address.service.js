const { Address } = require('../models/');

const getAllByEmployeeId = async (employeeId) => {
  const addresses = await Address.findAll({ 
    where: { employeeId },
    attributes: { exclude: ['employeeId'] }, 
  });

  return addresses;
};

module.exports = {
  getAllByEmployeeId,
}