
document.getElementById("btnSend").addEventListener("click" , function(){
    var inputfield = document.getElementById("inputField").value;
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var secondpart = "&units=metric&lang=de&appid=8e3ad4a03522edcad4c7c354ce9c44a8";
    
    fetch(api + inputfield + secondpart, {
        method: "GET"
    }).then(response => response.json())
        .then(function(data){
            
            let stadtname = "";
            let html = "";
            let weather_descrition = "";

            let lon = data.coord.lon;
            let lat = data.coord.lat;
            let weather_icon = data.weather[0].icon;
            let weather_desc = data.weather[0].description;
            let temp = parseInt(data.main.temp, 10);


            stadtname += "<h1>" + data.name + " " + temp + "°C</h1>";
            html += "<h6>" + lon + " - " + lat + "</h6>";
            weather_descrition += "<h5>" + weather_desc + "</h5>";

            document.getElementById("name-stadt").innerHTML = stadtname;
            document.getElementById("moreInfo").innerHTML = html;
            document.getElementById("weather-desc").innerHTML = weather_descrition;

            getWeatherCondition(weather_icon);
        })
        
});

var input = document.getElementById("inputField");

input.onkeyup = function(event){
    if(event.key == "Enter"){
        document.getElementById("btnSend").click();
    }
}

function getWeatherCondition(condition){
    let link = "<img src='http://openweathermap.org/img/wn/";
    let magnify = "@2x.png'>"
    document.getElementById("weather-condition").innerHTML = link + condition + magnify;               

}