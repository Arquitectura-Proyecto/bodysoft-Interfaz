const soap = require('soap');
const URI = require("../servers/msOthers");

//Cliente Soap
function get2dSOAPData(res, param) {

  var url = `${URI}wsusers/wsdl`;
  var args = { userId: param };
  console.log(args);

  soap.createClient(url, (err, client) => {
    if (err) {
      res.send(err);
    }
    else {
      client.checkUser(args, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  });

}

module.exports = { get2dSOAPData };