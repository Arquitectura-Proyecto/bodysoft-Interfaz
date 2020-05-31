const { getUserByIdClient } = require("../services/profileClient");
const { get2dSOAPData } = require("../services/otherClient");

//Server rest
var rest = require(`express`)();

rest.get('/getUserById/:parameter', function (req, res) {
  param = req.params.parameter // Asi se saca el paramentro 
  getUserByIdClient(res, param);
});

rest.get('/2dSOAPConsumption/:parameter', (req, res) => {
  param = req.params.parameter // Asi se saca el paramentro 
  get2dSOAPData(res, param);
});

rest.listen(3001, function () {
  console.log('La api REST que consume el cliente SOAP esta escuchando 3001!');
});

module.exports = { rest };