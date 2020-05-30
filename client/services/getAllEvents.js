const soap = require('soap');
const URI = require("../servers/msEvents");

//Cliente Soap
function requestClient(res,param){
  
  var url = `${URI}getAllEvents?wsdl`;
  var args = {request_data: param}; // Literal en esta funcion no lo usan pero asi seria

  soap.createClient(url, function(err, client) {
    if(err) {
      res.send(err);
    }
    else{
      client.getAllEvents_event(args, function(err, result) {
        /* 
        Este nombre debe ser igual al del
          <portType name = "getAllEvents_function">
            <operation name = "getAllEvents_event">
        del archivo xwl getAllEventService
      */
          res.send(result);
      });
    }
  });

}

module.exports = {
    requestClient
  };