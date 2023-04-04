// const notifier = require('node-notifier');
// const open = require('open');
// const franc = require('franc');
// const Twit = require('twit');

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

client.get('statuses/user_timeline', {screen_name: 'twitterdev'}, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.log(error);
  }
});
