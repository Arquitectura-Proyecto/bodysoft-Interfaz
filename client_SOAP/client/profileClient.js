const soap = require('soap');
const URI = require("../server/msProfile");

//Cliente Soap
function getUserByIdClient(res,param){
  
  var url = `${URI}getUserById?wsdl`;
  var args = {id: param}; // Literal en esta funcion no lo usan pero asi seria
  console.log(args);

  soap.createClient(url, function(err, client) {
    if(err) {
 
      res.send(err);
    }
    else{
      client.getUserById(args, function(err, result) {
      
          res.send(result);
      });
    }
  });

}

module.exports = {
  getUserByIdClient
  };