const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  // modo eager loading - traz tudo antecipadamente
  // const employee = await Employee.findOne({
  //     where: { id },
  //     include: [{ model: Address, as: 'addresses', attributes: { exclude: ['employeeId'] }, }],
  //   });

  // metodo lazy loading - separa as chamadas e apenas o traz qdo necessário
  //o retorno de Address foi transferido para o model address
  //e será chamado apenas qdo solicitado
  const employee = await Employee.findOne({
    where: { id },
  });

  
  return employee;
}

module.exports = { getAll, getById, };