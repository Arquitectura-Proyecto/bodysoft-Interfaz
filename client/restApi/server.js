const {
  requestProfileClient
  } = require("../services/profileClient");
  
  // Rest Api server


  var rest = require(`express`)();
  

  // Autopetición 
  rest.get('/getUserById/:parameter', function (req, res) { //el /:param decirle que lo que viene es un parametro
    param = req.params.parameter // Asi se saca el paramentro 
    requestProfileClient(res, param);
  });
  
  rest.listen(3000, function () {
    console.log('Api rest which expose the result of SOA client listen on port 3000 (development) 3001 (Production) ');
  });
  
  module.exports = {rest};