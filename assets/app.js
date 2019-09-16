  // Set the configuration for your app
  // TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyBfbWl9PSa3n9Yhv6x0n79qDC7ZDtuj0ys",
    authDomain: "train-time-app-f43a9.firebaseapp.com",
    databaseURL: "https://train-time-app-f43a9.firebaseio.com",
    storageBucket: "train-time-app-f43a9.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  $("#submitButton").on("click",function(){
    var trainName = $("#trainName").val().trim()

  })
