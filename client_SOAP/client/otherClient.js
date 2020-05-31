const soap = require('soap');
const URI = require("../servers/msOthers");

//Cliente Soap
function requestClient(res,param){
  
  var url = `${URI}`;
  var args = { }; // Literal en esta funcion no lo usan pero asi seria
  console.log(args);

  
}

module.exports = {
    requestClient
  };