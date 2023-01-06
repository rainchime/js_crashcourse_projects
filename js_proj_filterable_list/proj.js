"use strict"

// grab the filter element
let filter = document.querySelector('#filterInput');

// add trigger event for the filter element
filter.addEventListener('keyup', filterNames);

// add filter function
function filterNames(e) {
    // grab all li
    let li = document.querySelectorAll('.collection-item');
    // turn li into Array
    Array.from(li).forEach((e) => {
        // grab the innerText content of each li and set to upper case to match the filter text's upper case
        let names = e.innerText.toUpperCase();
        // check if filter text matches names
        if(names.includes(filter.value.toUpperCase())) {
            e.style.display = 'block';
        } else {
            e.style.display = 'none';
        }

    })
}