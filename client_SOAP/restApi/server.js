const {
  getUserByIdClient
  } = require("../client/profileClient");
  
  //Server rest
  var rest = require(`express`)();
  
  rest.get('/getUserById/:parameter', function (req, res) { 
    param = req.params.parameter // Asi se saca el paramentro 
    getUserByIdClient(res, param);
  });
  
  rest.listen(3001, function () {
    console.log('La api REST que consume el cliente SOAP esta escuchando 3001!');
  });
  
  module.exports = {rest};