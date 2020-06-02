const PORT = process.env.PORT_SERVER_SOAP || "3010";
const END_POINT = process.env.END_POINT_SERVER_SOAP || "http://localhost";

const URL = END_POINT + ":" + PORT + "/";

module.exports = URL;