//sets up date and time in legible form
$(document).ready(function () {

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

    function forecastHTML(date) {
        let html = '';
        html += '<div>' + dateTime(date.dt).slice(0, 6) + '</div>';
        html += '<div>' + wxIcon(date.weather[0].icon) + '</div>';
        html += '<div>' + date.temp.max + '</div>';
        html += '<div>' + date.temp.min + '</div>';
        html += '<div>' + Math.round(date.pop * 100) + '%</div>';
        return html;
    }

    function alertHTML(alert) {
        let html = '';
        html += '<div>From: ' + alert.sender_name + '</div>'
        html += '<div>Event: ' + alert.event + '</div>'
        html += '<div>Start: ' + dateTime(alert.start) + '</div>'
        html += '<div>End: ' + dateTime(alert.end) + '</div>'
        html += '<div>Details: ' + alert.description + '</div>'
        return html;
    }

    mapboxgl.accessToken = MAPBOX_KEY;

    function call(location) {

        $.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + location.lat + "&lon=" + location.lng + "&units=imperial&appid=" + OPEN_WEATHER_KEY).done(function (data) {
            reverseGeocode(location, MAPBOX_KEY).then((place) => {
                let where = place.split(",")
                $('#city').val(where[0] + "," + where[2]);
            });
            console.log(data);
            $('#curCond').empty().append(wxIcon(data.current.weather[0].icon));
            $('#pos').empty().append("LAT:" + data.lat.toFixed(3) + "<br>LON:" + data.lon.toFixed(3));
            $('#dtg').empty().append(dateTime(data.current.dt))
            $('#curTempFeel').empty().append(data.current.feels_like + "&deg;F")
            $('#humidity').empty().append(Math.round(data.current.humidity) + '%');
            $('#today').empty().append(forecastHTML(data.daily[0]));
            $('#dayOne').empty().append(forecastHTML(data.daily[1]));
            $('#dayTwo').empty().append(forecastHTML(data.daily[2]));
            $('#dayThree').empty().append(forecastHTML(data.daily[3]));
            $('#dayFour').empty().append(forecastHTML(data.daily[4]));
            $('#dayFive').empty().append(forecastHTML(data.daily[5]));
            data.alerts.forEach(alert => {
                $('#alertDisplay').append(alertHTML(alert));
            })
        })

    }

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

    let pos = marker.getLngLat();


    call(pos);

    marker.on('dragend', function () {
        pos = marker.getLngLat();
        map.flyTo({center: pos});
        call(pos);
    })

    $("#city").on('focusin', function () {
        $('#city').val(null)
        $(document).keyup(function (e) {
            if (e.key === "Enter") {
                geocode($('#city').val(), MAPBOX_KEY).then(function (searchValue) {
                    pos = {
                        lng: searchValue[0],
                        lat: searchValue[1]
                    }
                    call(pos);
                    marker.setLngLat(searchValue).addTo(map);
                    map.flyTo({center: pos})
                })
            }
        })
    })

    $("#alertsContainer").click(function () {
        $("#alertDisplay").toggleClass("hidden");
    })

})