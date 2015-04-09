// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
    this.at(0).play();
    console.log("PLAYFIRST HAS BEEN RUN!")
      // if(this.length === 1){
      //   // play the first one
      // }
      //
      //
      //
  }

});





