// Get the first character of a string
// (The second value is not included in the range, similar to Python)
var myName  = "Angela";
myName.slice(0,1);

// Twitter character counter that cuts a tweet down to a 140 characters
var tweet = `Había una vez un enano que se llamaba janano y le gustaba el banano. El tenía
un amigo que se llama justiniano y nunca olvidaba el día del marciano. Una excelente historia
llena de tragedia y traición.`;

var cutTweet = tweet.slice(0, 140);
console.log(cutTweet);
