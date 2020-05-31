# bodysoft-Interfaz

## Para Correr
 npm install
 
 npm run dev


## IMPORTANTE
Cada vez que se cambie el xml ( .wsdl) se debe dejar de correr el proyecto y volver a correr de nuevo, para poder observar los cambios.



## Para mirar xml en el navegador 

http://localhost:8001/getUserById?wsdl

## Para probar en postman

### Metodo get
/1 Parametro de la consulta

http://localhost:3001/getUserById/1

### Para uso desde cliente SOAP Postman
hacer un request tipo post a http://localhost:8001/getUserById con body tipo raw XML en la forma:
```
<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:examples:userService">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:getUserById soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
         <id xsi:type="xsd:string">1</id>
      </urn:getUserById>
   </soapenv:Body>
</soapenv:Envelope>
```

