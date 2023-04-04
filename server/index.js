const express = require('express');
const app = express();
const connection = require('./connection');
const cors = require('cors');
const mongoose = require('mongoose');
connection();
app.use(cors());

mongoose.connection.on("connected",()=>console.log("connected to mongodb"));
mongoose.connection.on("error",()=>console.log("failed to connect to mongodb"));

app.use(express.json());
app.use(require("./router"));
const port = 8085|| process.env.port;

const Twitter = require('twitter');

// const apikey = "IpyOcby5Ou71akqc3hVMt8wEw"
// const apiSecretKey = "5fiLeYYb6M1LQMfil2BBixkyHKisuOBYgj3kKrsRfMEdE9B3nt";
// const accessToken = "1131525140263522305-ijNUEU5bJl3yt6YxYmDcL7nJrtgCBJ";
// const accessTokenSecret = "eHnMTS5ddBr92eSaXIj6FTnfkM17epsmNh485quP1fJ3c";

const client = new Twitter({
  consumer_key: 'IpyOcby5Ou71akqc3hVMt8wEw',
  consumer_secret: '5fiLeYYb6M1LQMfil2BBixkyHKisuOBYgj3kKrsRfMEdE9B3nt',
  access_token_key: '1131525140263522305-ijNUEU5bJl3yt6YxYmDcL7nJrtgCBJ',
  access_token_secret: 'eHnMTS5ddBr92eSaXIj6FTnfkM17epsmNh485quP1fJ3c'
});

// client.get('statuses/user_timeline', {screen_name: '__shiva__sharma'}, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   } else {
//     console.log(error);
//   }
// });

app.listen(port, ()=>(console.log(`server is up at port:${port}`)))