const {
    requestClient
  } = require("../services/getAllEvents");
  
  //Server rest
  var rest = require(`express`)();
  
  rest.get('/getUserById/:parameter', function (req, res) { //el /:param decirle que lo que viene es un parametro
    param = req.params.parameter // Asi se saca el paramentro 
    requestClient(res, param);
  });
  
  rest.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  
  module.exports = {rest};