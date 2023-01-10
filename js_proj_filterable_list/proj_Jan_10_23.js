"use strict"
let filter = document.querySelector('#filterInput');

filter.addEventListener('keyup', (e) => {
    // grab filterText
    let filterText = e.target.value.toUpperCase();
    // console.log(filterText);
    
    // grab all the li with names
    let li = document.querySelectorAll('.collection-item');
    // console.log(li);
    
    // convert li to an Arry and get innerHTML of the lis
    Array.from(li).forEach((e) => {
        let names = e.innerText.toUpperCase();
        // console.log(names);
    
        // compare list of names with filterText
        if(names.includes(filterText)) {
            e.style.display = 'block';
        } else {
            e.style.display = 'none';
        }
    })
})