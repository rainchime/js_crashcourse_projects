"use strict"
// hide the cards before input is received
document.querySelector('#output').style.visibility = 'hidden';
// grab the input
let lbWeight = document.querySelector('#lbsInput');

// use input as trigger event
lbWeight.addEventListener('input', (e) => {
    // show the cards when input is received
    document.querySelector('#output').style.visibility = 'visible';
    // grab input value
    // let lbs = e.target.value; 
    let lbs = lbWeight.value;

    // log out output values as textContent
    document.querySelector('#gramsOutput').textContent = lbs * 453.5924;
    document.querySelector('#KgOutput').textContent = lbs * 0.4534924;
    document.querySelector('#ozOutput').textContent = lbs * 16;
});
