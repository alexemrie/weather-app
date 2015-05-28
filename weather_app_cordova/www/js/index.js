$(document).ready(function() {
  $.ajax({
    url: "http://jsonplaceholder.typicode.com/posts/1",
    dataType: "json",
    success: function(data) {
      $("#deviceready").append("<p>" + data["title"] + "</p>");
    }
  });

  $.ajax({
    url: "http://jsonip.com",
    dataType: "json",
    success: function(data) {
      $("#deviceready").append("<p>" + data["ip"] + "</p>");
    }
  });

  $.ajax({
    url: "http://www.telize.com/geoip?callback=?",
    dataType: "json",
    success: function(data) {
      var longitude = "<p>Longitude= " + data["longitude"] + "</p>";
      var latitude = "<p>Latitude= " + data["latitude"] + "</p>";
      $("#deviceready").append(longitude + latitude);
    }
  });

  jsonFlickrFeed = function(data) {
    var randomNumber = Math.floor(Math.random() * 11);
    var src = data.items[randomNumber]["media"]["m"].replace(/_m/, "");
    console.log(src);
    $("body").css("background", 'url("' + src + '") no-repeat center center fixed');
    $('body').css('background-size', 'cover');
  }

  $.ajax({
    type: "GET",
    data: {format: "json"},
    dataType: "jsonp",
    url: "https://www.flickr.com/services/feeds/photos_public.gne?tags=landscape&format=json",
  });

  $(document).on("click", "#submitButton", function() {
    var cityUrl = $("#city").val().toLowerCase();
    var stateUrl = $("#state").val().toLowerCase();
    var searchURL = cityUrl + ',' + stateUrl;
    var src = "http://api.openweathermap.org/data/2.5/weather?q=" + searchURL;

    $.ajax({
      type: "GET",
      dataType: "json",
      url: src,
      success: function(data) {        
        $(".weather").html("Current weather in " + cityUrl + ", " + stateUrl + " is " + data["weather"][0]["description"]);
      }
    });
  });

});
