"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // $.get('/status', (res) => {
    //     $('#order-status').html(res);
    // <div id="fortune-text"></div>
    //   '/fortune'
    $.get('/fortune', (res) => {
        $('#fortune-text').html(res);
    })

}

$('#get-fortune-button').on('click', showFortune);


{/* <div id="weather-info"></div> */}


// PART 2: SHOW WEATHER
// WEATHER = {
//     '94110': {'forecast': 'Rainy, damp, and rich with hipsters.', 'temp': '60F'},
//     '99507': {'forecast': 'Warm, balmy, and good for sunbathing.', 'temp': '100F'},
//     '94102': {'forecast': 'Delightful, clever, and full of Python.', 'temp': '55F'},
// }


function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
        $('#weather-info').html(res['forecast']);
        
    })

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
// /order-melons
// // $.post()
// #order-status
// .addClass() 
function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
   
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


