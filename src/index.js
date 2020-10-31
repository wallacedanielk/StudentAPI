
// libraries that I need
const express = require ('express');

//apollo server for gql
const {apolloServer, gql} = require('apollo-server-express');

//environment variable
require('dotenv').config();


const app = express();

const port = process.env.PORT;
//  get response
app.get('/', (request, response) => response.send('Hello, Student API'));


//listening on port 4000
app.listen(4000, () => console.log (`listening on port ${port}`));