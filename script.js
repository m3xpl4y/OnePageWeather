
document.getElementById("btnSend").addEventListener("click" , function(){
    var inputfield = document.getElementById("inputField").value;
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var secondpart = "&units=metric&lang=de&appid=8e3ad4a03522edcad4c7c354ce9c44a8";
    
    fetch(api + inputfield + secondpart, {
        method: "GET"
    }).then(response => response.json())
        .then(function(data){
            let temp = parseInt(data.main.temp, 10);
            let stadtname = "";
            let html = "";
            let background = data.weather[0].id;
            let lon = data.coord.lon;
            let lat = data.coord.lat;
            
            stadtname += "<h1>" + data.name + " " + temp + "°C</h1>";
            html += "<h4>" + lon + " : " + lat + "</h4>";
            document.getElementById("name-stadt").innerHTML = stadtname;
            document.getElementById("moreInfo").innerHTML = html;
            getWeatherCondition(background);
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
    switch(condition){
        case 200,201,202,210,211,212,221,230,231,232:
                document.getElementById("weather-condition").innerHTML = link + "11d" + magnify;
                break;
        case 300,301,302,310,311,312,313,314,321: 
                document.getElementById("weather-condition").innerHTML = link + "09d" + magnify;
                break;
        case 500,501,502,503,504: 
                document.getElementById("weather-condition").innerHTML = link + "10d" + magnify;
                break;
        case 511,520,521,522,531: 
                document.getElementById("weather-condition").innerHTML = link + "09d" + magnify;  
                break;
        case 600,601,602,611,612,613,615,616,620,621,622:
                document.getElementById("weather-condition").innerHTML = link + "13d" + magnify;     
                break;
        case 701,711,721,731,741,751,761,762,771,781:
                document.getElementById("weather-condition").innerHTML = link + "50d" + magnify;  
        case 800:
                document.getElementById("weather-condition").innerHTML = link + "01d" + magnify;   
                break;
        case 801: 
                document.getElementById("weather-condition").innerHTML = link + "02d" + magnify; 
                break;
        case 802:
                document.getElementById("weather-condition").innerHTML = link + "03d" + magnify;     
                break;
        case 803,804: 
                document.getElementById("weather-condition").innerHTML = link + "04d" + magnify;   
                break;                 
    }    
}