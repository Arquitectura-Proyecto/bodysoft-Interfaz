const axios = require("axios");
const URI = require("../servers/msEvents");


const completeURI = `${URI}events`;

//Nuestras funciones iguales que en la capa de data dee la apigateway

const getAllEvents = async (args) => {
  try {
    const { data } = await axios.get(completeURI);
    return data;
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: error.response.data,
        status: error.response.status,
      })
    );
  }
};

// Exportamos las funciones
module.exports = {
  getAllEvents
};