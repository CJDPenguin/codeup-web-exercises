//all this code should move to a separate JS file
let DATA = {};// establish variable for data from API request

mapboxgl.accessToken = MAPBOX_KEY;
//async 08
//API call
$.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.424349&lon=-98.491142&units=imperial&appid=" + OPEN_WEATHER_KEY).done(function (data) {

    console.log(data);
    DATA = data;// stores data into external object
    //Converts JS date to legible
    let dateTime = function (dateData) {
        let date = new Date(dateData * 1000)
        let d = function () {
            if (date.getDate() < 10) {
                return '0' + date.getDate()
            }
            return date.getDate()
        }
        let m = function () {
            switch (date.getMonth()) {
                case 0:
                    return ("JAN");
                case 1:
                    return ("FEB");
                case 2:
                    return ("MAR");
                case 3:
                    return ("APR");
                case 4:
                    return ("MAY");
                case 5:
                    return ("JUN");
                case 6:
                    return ("JUL");
                case 7:
                    return ("AUG");
                case 8:
                    return ("SEP");
                case 9:
                    return ("OCT");
                case 10:
                    return ("NOV");
                case 11:
                    return ("DEC");
            }
        }
        let y = date.getFullYear();
        let time = date.toTimeString().substring(0, 5);
        return d() + ' ' + m() + ' ' + y + "<br>" + time;
    }
    //creates a location object for use in reverseGeocode function
    let location = {
        lng: data.lon,
        lat: data.lat
    }
    //Adds location to the right spot
    reverseGeocode(location, MAPBOX_KEY).then((place) => {
        let where = place.split(",")
        $('#city').append(where[0] + "<br>" + where[2]);
    });

    //Establishes weather icon from fontawesome based on weather ID from API
    function wxIcon(data) {
        let wxID = data.slice(0, 2);
        switch (wxID) {
            case '01': //clear sky
                wxID = '<ion-icon name="sunny-sharp"></ion-icon>';
                return wxID;
            case '02': //few clouds
                wxID = '<ion-icon name="sunny-sharp"></ion-icon>';
                return wxID;
            case '03': //scattered clouds
                wxID = '<ion-icon name="partly-sunny-sharp"></ion-icon>';
                return wxID;
            case '04': //broken clouds
                wxID = '<ion-icon name="cloud-sharp"></ion-icon>';
                return wxID;
            case '09': //shower rain
                wxID = '<ion-icon name="rainy-sharp"></ion-icon>';
                return wxID;
            case '10': //rain
                wxID = '<ion-icon name="rainy-sharp"></ion-icon>';
                return wxID;
            case '11': //thunderstorm
                wxID = '<ion-icon name="thunderstorm-sharp"></ion-icon>';
                return wxID;
            case '13': //snow
                wxID = '<ion-icon name="snow-sharp"></ion-icon>';
                return wxID;
            case '50': //mist
                wxID = '<ion-icon name="water-sharp"></ion-icon>';
                return wxID;
            default:
                wxID = '<ion-icon name="cafe-sharp"></ion-icon> Insert Coffee to continue';
                return wxID;
        }
    }

//puts divs for each day's forecast together
    function forecastHTML(date) {
        let html = '';
        html += '<div>' + dateTime(date.dt).slice(0, 6) + '</div>';
        html += '<div>' + wxIcon(date.weather[0].icon) + '</div>';
        html += '<div>' + date.temp.max + '</div>';
        html += '<div>' + date.temp.min + '</div>';
        html += '<div>' + Math.round(date.pop * 100) + '%</div>';
        return html;
    }

    function update() {
        $('#curCond').append(wxIcon(data.current.weather[0].icon));
        $('#pos').append("LAT: " + data.lat + "<br>LON: " + data.lon);
        $('#dtg').append(dateTime(data.current.dt))
        $('#curTempFeel').append(data.current.feels_like + "&deg;F")
        $('#humidity').append(Math.round(data.current.humidity) + '%');
        $('#today').append(forecastHTML(data.daily[0]));
        $('#dayOne').append(forecastHTML(data.daily[1]));
        $('#dayTwo').append(forecastHTML(data.daily[2]));
        $('#dayThree').append(forecastHTML(data.daily[3]));
    }

    update();
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/cjdpenguin/cl3p0cdm4004n14myrccdh02i', // style URL
        center: [-98.49, 29.42], // starting position [lng, lat]
        zoom: 5, // starting zoom
        attributionControl: true
    });

    const marker = new mapboxgl.Marker({color: 'black', draggable: true})
        .setLngLat([-98.49, 29.42])
        .addTo(map);

    function onDrag() {
        let lnglat = marker.getLngLat();
        console.log(lnglat);
        map.easeTo({center: lnglat});
        location = lnglat;
        reverseGeocode(location, MAPBOX_KEY).then((place) => {
            let where = place.split(",")
            $('#city').empty().append(where[0] + "<br>" + where[2]);
            $('#pos').empty().append("LAT: " + (location.lat).toFixed(4) + "<br>LON: " + (location.lng).toFixed(4));
        });
    }

    marker.on('dragend', onDrag);

})

