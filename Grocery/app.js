// Selecte Items
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


// Edit Option
let editElement, editFlag = false;
let editID = "";

// Event Listener
// Sumbit form
form.addEventListener('submit', addItem);

// Functions
function addItem(e){
  e.preventDefault();
  
}