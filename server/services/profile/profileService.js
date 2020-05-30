const {
  getProfileByIdUser
} = require("../../repositories/profileRepository.js");


var userService = {
  UserService: {
   
    UserPort: { 
      getUserById: async function(args) { console.log(args);return await getProfileByIdUser(args.id.$value);}
     
    }
  }
};

module.exports = userService;
