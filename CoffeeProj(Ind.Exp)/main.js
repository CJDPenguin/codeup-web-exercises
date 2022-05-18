"use strict"

function renderCoffee(coffee) {
    return '<div class="coffee card"><h3 class="card-title">' + coffee.name + '</h3><p class="card-body">' + coffee.roast + '</p></div>';
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function filterSearch(){
    let searchTerm = searchInput.value.toLowerCase();
    let isLight = document.querySelector("#light").checked;
    let isMedium = document.querySelector("#medium").checked;
    let isDark = document.querySelector('#dark').checked;
    let roastNum = isLight + isMedium + isDark;
    console.log(isLight);
    console.log(isMedium);
    console.log(isDark);
    console.log(roastNum);
    switch (roastNum){
        case 3: console.log('All the roasts');
        list.innerHTML = renderCoffees(coffees.filter(coffee => coffee.name.toLowerCase().includes(searchTerm)));
        break
        default: console.log('Some roasts');
        list.innerHTML = renderCoffees(coffees.filter(coffee => (isLight === true || isMedium === true || isDark === true) && coffee.name.toLowerCase().includes(searchTerm)));
        break
        // case 1: console.log('A roast');
        // break
        // default: console.log('No roasts')
    }
}
// function coffeeSearch(){
//     let searchTerm = searchInput.value.toLowerCase();
//     section.innerHTML = renderCoffees(coffeeList.filter(coffee => (roastSelection.value === 'all' || coffee.roast === roastSelection.value) && coffee.name.toLowerCase().includes(searchTerm)));
// }
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var list = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector("[name= 'roast']");
let searchInput = document.querySelector('#coffeeSearch');

list.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change',filterSearch);
