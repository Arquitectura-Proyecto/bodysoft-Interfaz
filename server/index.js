/**
 * INDEX DEL SERVIDOR
 */

var soap = require(`soap`);
var express = require(`express`);
var fileSystem = require('fs');


var service = require('./services/profile/eventService');

var xml_getAllEvents = fileSystem.readFileSync('./server/services/profile/templates/getAllEventsService.wsdl', 'utf8');



var app = express();

app.use(require(`body-parser`).raw({type: function(){return true;}, limit: '5mb'}));


app.listen(8001, function(){
  soap.listen(app, '/getAllEvents', service, xml_getAllEvents, function(){
    console.log('server initialized');
  });
});

module.exports = {app};