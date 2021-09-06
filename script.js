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

function getWeatherCondition(condition){
    switch(condition){
        case 800: document.body.style.background = "url('https://pixabay.com/get/g1df9c9e6467be945b55df15bcaf7e6f06e66ba1644c68a4294486f19f946963e4eb749b35888503e0e5d67ec5c3c3f6e_1920.jpg')";
        break;
        case 801: document.body.style.background = "url('https://pixabay.com/get/ga7b574bd0d09c50c48ab8f5833e41453dc4be7677efbe42f62d5f8395861e769984c9662d4085bb4ae383d136d024526_1920.jpg')";
        break;
        case 802: document.body.style.background = "url('https://pixabay.com/get/ge1b0c2fe413a46162bb4fa34b1496b5e4dd09dfb2e376ea57cac43d35c9d1d031df1f66272e1c341bc9e8daee6973439_1920.jpg')";
        break;
        case 803: document.body.style.background = "url('https://pixabay.com/get/gf97e19b4286b413b5f415b894db3fdd93b67f604aaf4e376b2b782597a958017b675b331add8d36d1bc314fa2500384e_1920.jpg')";
        break;
        case 804: document.body.style.background = "url('https://pixabay.com/get/g9e46bcb5e9a2db3597a5e7fcae489fe9cb7ffdbaffb4940eaf2e75f4a9391173dc92185a8f61ac41fe6e18d784d658ed_1920.jpg')";
        break;
        case 500: document.body.style.background = "url('https://pixabay.com/get/g417f420761ead952130974849c474c32021211f6f169628a9b661d1f576974ca1a3faf286409f2c632c9c1fe769d5df9_1920.jpg')";
        break;
        case 501: document.body.style.background = "url('https://pixabay.com/get/g5e99ac739f8a790531c938831e1548e2c460b18e0c579190ec0b1a724d5c197d3a5cf621707cbdcdd38926dfe51c8b4b_1920.jpg')";
        break;
        case 502: document.body.style.background = "url('https://pixabay.com/get/ga1fab09e894b1b1fbe03d111605c28442ae5ebe70ef9c082d15785e61d2baaf763a7a60314373b07da3226d5857e059a_1920.jpg')";
        break;
        case 503: document.body.style.background = "url('https://pixabay.com/get/gb560f8d49c1d193d7bf693bbaac555e7281dd92dedd9ffe66402c3ed3d6941c54abb5125d71920ebd548357eb3488f94_1920.jpg')";
        break;
        case 504: document.body.style.background = "url('https://pixabay.com/get/gd8c795cc0be267eb56df1928d7bb2e1a12f2e80a704e4ebd95a70ada760b46c1abf22b02ebc0b96ac6eb316c788e4916_1920.jpg')";
        break;
        case 511: document.body.style.background = "url('https://pixabay.com/get/gfb29b382569fad3b87734e1a6c991f0b353469e6e6acf616e509c4feb39cbb78a32628650f9db2b00d27db9a737e9956_1920.jpg')";
        break;
        case 520: document.body.style.background = "url('https://pixabay.com/get/g5c6456bce6b98f4271cbec1e09259a5cd993a817be8312d4154726796e6bdf17aeb26a0629d04d0a624eb53c5d0c827a.jpg')";
        break;
        case 521: document.body.style.background = "url('https://pixabay.com/get/gc83bc9e93b3697102c4becbfb0615e35ac299cf364d87979658fa1335301c9c0ec3847854ba24bbd02f96f904143a0c0_1920.jpg')";
        break;
        case 522: document.body.style.background = "url('https://pixabay.com/get/gfb29b382569fad3b87734e1a6c991f0b353469e6e6acf616e509c4feb39cbb78a32628650f9db2b00d27db9a737e9956_1920.jpg')";
        break;
        case 531: document.body.style.background = "url('https://pixabay.com/get/gfb29b382569fad3b87734e1a6c991f0b353469e6e6acf616e509c4feb39cbb78a32628650f9db2b00d27db9a737e9956_1920.jpg')";
        break;
    }
    
}