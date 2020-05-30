const PORT = process.env.PORT_SERVER_SOAP || "8001";
const END_POINT = process.env.END_POINT_SERVER_SOAP || "http://localhost";

const URL = END_POINT + ":" + PORT + "/";

module.exports = URL;
