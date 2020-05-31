const {
  getProfileByIdUser
} = require("../../repositories/profileRepository.js");


var userService = {
  UserService: {
   
    UserPort: { 
      getUserById: async function(args) {
        
        
        
        console.log(args);
        if(args.id.$value){
          return await getProfileByIdUser(args.id.$value);
        }else{
          return await getProfileByIdUser(args.id);}
        }
        
     
    }
  }
};

module.exports = userService;
