var map;
var z1;
var z2;
function f1(){
        var x = document.forms["myForm"]["ip_address"].value;
        var Url = "http://api.ipinfodb.com/v3/ip-city/?key=11ffe4d56d304ff8a095a56f2014f59911d66ade561c52709b72847fb73cf3bc&format=json&ip=" +x;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', Url, true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
        var response1 = JSON.parse(xhr.responseText);

            z1 = parseFloat(response1.latitude);
            z2 = parseFloat(response1.longitude);

            // console.log(typeof(z1) + "value of z1 is :" +z1);

        let s = document.createElement("script");
        document.head.appendChild(s);
            s.addEventListener("load", () => {
                //script has loaded
                // console.log("inside the map "+ " " +z1, z2);
                // console.log("1. script has loaded");
                map = new google.maps.Map(document.getElementById("map"), {
                    center: {
                        
                        lat: z1,
                        lng: z2
                    },
                    zoom: 5,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                // console.log("2. map is run");
                var marker = new google.maps.Marker({position:{lat:z1,lng:z2},map:map});
                // console.log("3. marker is attacted");
            });
            s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCzzyxGdw5XAeSwbhon-GmFYaCwRTX18eM';



        document.getElementById("statusCode").innerHTML = response1.name + ", " + response1.statusCode;
        document.getElementById("statusCode").innerHTML = response1.statusCode;
        document.getElementById("statusMessage").innerHTML = response1.statusMessage;
        document.getElementById("ipAddress").innerHTML = response1.ipAddress;
        document.getElementById("countryCode").innerHTML = response1.countryCode;
        document.getElementById("countryName").innerHTML = response1.countryName;
        document.getElementById("regionName").innerHTML = response1.regionName;
        document.getElementById("cityName").innerHTML = response1.cityName;
        document.getElementById("zipCode").innerHTML = response1.zipCode;
        document.getElementById("latitude").innerHTML = response1.latitude;
        document.getElementById("longitude").innerHTML = response1.longitude;
        document.getElementById("timeZone").innerHTML = response1.timeZone;
        }
        }
        }


