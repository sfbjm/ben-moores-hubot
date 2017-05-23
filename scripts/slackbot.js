

/***********************/
/* Bot 1 - Congrat Bot */
/***********************/

module.exports = function(robot) {
var images = ['http://pa1.narvii.com/6261/5a310e7c832762a318e7b03794ce540a41cc6ae2_hq.gif', 'http://www.reactiongifs.com/r/drj1NmK.gif', 'http://i58.photobucket.com/albums/g246/sey115/Photobucket%20Desktop%20-%20Sage%20Youngs%20MacBook/Funny%20and%20Random/andyreaction_zpsecc4e2b7.gif', 'http://www.reactiongifs.com/r/2013/06/Colbert-High-Five.gif', 'http://www.reactiongifs.com/r/jcwd.gif'];
    robot.hear(/well done|congrats|great job|awesome|nailed it|great stuff/i, function(msg){
      var gifsRandomizer = images[Math.floor(Math.random()*images.length)];
        msg.send(gifsRandomizer);
  });
}


//Version 1: Case statement with predefined cases and results.

// https://news.google.com/headlines/section/topic/[INSERT_QUERY_HERE]?hl=en&ned=us

// module.exports = function(robot) {
//   robot.respond(/Show me (.*) news /, function(msg) {
//     var news;
//     news = msg.match[1];
//     console.log(news);
//     return msg.reply("https://news.google.com/headlines/section/topic/"+news+"?hl=en&ned=us");
//   });
// }


// // //Version 2: Passing variables as URL paramaters

// module.exports = function(robot) {
  
//   robot.respond(/Show me news (about|for) (.*)/, function(msg) {
//     var news;
//     news = msg.match[1];
//     console.log(news);
//       return msg.reply("https://news-ui-prod.sandbox.google.com/search/section/q/"+news+"/"+news+"?hl=en&ned=us");

//   // robot.respond(/Show me a stock quote for (.*)/, function(msg) {
//   //   var quote;
//   //   news = msg.match[1];
//   //   console.log(quote);
//   //     if (
//   //     }
//   });
// }



  






/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

/*
var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/