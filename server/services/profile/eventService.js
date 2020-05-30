const {
  getAllEvents
} = require("../../repositories/eventRepository.js");


var myService = {
  getAllEvents: {
    /* 
        Este nombre debe ser igual al del
          <portType name = "getAllEvents_function">
            <operation name = "getAllEvents_event">
        del archivo xwl getAllEEventService
      */
    getAllEvents_function: { 
      getAllEvents_event: async function (args) { return await getAllEvents(args);
      }
    }
  }
};

module.exports = myService;
