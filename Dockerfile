FROM node:12

WORKDIR /bodysoft-interface

COPY package*.json /bodysoft-interface/

RUN npm install

COPY . /bodysoft-interface/

CMD ["node","index.js"]
