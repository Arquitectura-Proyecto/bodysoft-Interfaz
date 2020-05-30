const soap = require('soap');
const URI = require("../servers/msProfile");

//Cliente Soap
/**
 * CAMBIAR TODO
 */
function requestProfileClient(res,param){
  
  var url = "http://localhost:8001/getUserById?wsdl";
  var args = {id: param}; // Literal en esta funcion no lo usan pero asi seria

  soap.createClient(url, function(err, client) {
    if(err) {
      res.send(err);
      console.log("error1")
    }
    else{
      client.getUserById(args, function(err, result) {

        if(err) {
          res.send(err);
          console.log("error2")
        }
        else{
          res.send(result);
        }
          
      });
    }
  });

}

module.exports = {
  requestProfileClient
  };