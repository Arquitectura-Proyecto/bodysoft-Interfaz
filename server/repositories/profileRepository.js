const axios = require("axios");
const  uriProfileUser  = require( "../servers/msProfile"); 




//Nuestras funciones iguales que en la capa de data dee la apigateway

const getProfileByIdUser = async (idUser) => {
  
  try {
    const { data } = await axios.get(uriProfileUser + '/' + idUser);
    
    return data;
  } catch (error) {
    console.log(error);
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
  getProfileByIdUser
};