const {
  getProfileByIdUser
} = require("../../repositories/profileRepository.js");


var userService = {
  UserService: {
    /* 
        Este nombre debe ser igual al del
          <portType name = "getAllEvents_function">
            <operation name = "getAllEvents_event">
        del archivo xwl getAllEEventService
      */
    UserPort: { 
      getUserById: async (args)=> { return await getProfileByIdUser(args.id);}
    }
  }
};

module.exports = userService;
