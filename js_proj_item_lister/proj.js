"use strict"
let form = document.querySelector('#addForm');
let itemList = document.querySelector('ul');
let filter = document.querySelector('#filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', delItem);
filter.addEventListener('keyup', filtItem);

// Add Item
function addItem(e) {
    e.preventDefault();
    // create new li
    let li = document.createElement('li');
    // add class to li
    li.className = 'list-group-item';
    // create new textNode and append to li
    li.appendChild(document.createTextNode(item.value));
    // console.log(li);
    // create new btn
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-right delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    console.log(li);
    // append li to ul
    itemList.appendChild(li);
}

// Delete Item
function delItem(e) {
    if(e.target.classList.contains('delete')) {
        // if target's class contains delete, grab the parent li
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Filter Item
function filtItem(e) {
    let searchText = e.target.value.toLowerCase();
    // console.log(searchText);
    // grab the li(s) aka the haystack
    let items = document.querySelectorAll('li');
    Array.from(items).forEach(function(item) {
        let haystack = item.firstChild.textContent;
        // console.log(haystack);
        // check searchText aka needle with haystack
        // !== -1 means needle can be found in the haystack and thus will provide an index value that's not -1
        if(haystack.toLowerCase().indexOf(searchText) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}