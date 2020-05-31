const ip = process.env.PROFILE_HOST || "http://localhost:8000";
const uriProfileUser = ip + "/bs-profile-ms/users";
module.exports =uriProfileUser;
