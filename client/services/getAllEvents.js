const soap = require('soap');
const URI = require("../servers/msEvents");

//Cliente Soap
function requestClient(res,param){
  
  var url = `http://localhost:8001/getUserById?wsdl`;
  var args = {id: param}; // Literal en esta funcion no lo usan pero asi seria
  console.log(args);

  soap.createClient(url, function(err, client) {
    if(err) {
 
      res.send(err);
    }
    else{
      client.getUserById(args, function(err, result) {
        /* 
        Este nombre debe ser igual al del
          <portType name = "getAllEvents_function">
            <operation name = "getAllEvents_event">
        del archivo xwl getAllEventService
      */
     console.log(err);
        
          res.send(result);
      });
    }
  });

}

module.exports = {
    requestClient
  };