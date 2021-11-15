// Select Items
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


// Edit Option
let editElement;
let editFlag = false;
let editID = "";
// Event Listener
// Sumbit form
form.addEventListener('submit', addItem);

// Clear items
clearBtn.addEventListener('click', clearItems);

const deleteBtn = document.querySelector('.delete-btn');

// Functions
function addItem(e){
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if(value && !editFlag){
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
      <p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn')
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);


    list.appendChild(element);
    displayAlert('item added to the list', 'success');
    container.classList.add("show-container")
    addToLocalStorage(id, value);
    setBackToDefault();

  }else if(value && editFlag){
    editElement.innerHtml = value;
    displayAlert('value changes', 'success')
    editLocalStorage(editID, value);
    setBackToDefault()
  }else {
    displayAlert('please enter value', "danger")
  }
}

// Display alert 
function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function(){
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000)
}

// Clear Items
function clearItems(){
  const items = document.querySelectorAll('.grocery-item');
  if(items.length > 0){
    items.forEach(function(item){
      list.removeChild(item);
    })
  }
  container.classList.remove("show-container");
  displayAlert('empty list', 'danger');
  setBackToDefault();
  // localStorage.removeItem('list');
}

// Delete Function
function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);
  if(list.children.length === 0){
    container.classList.remove("show-container");
  }
  displayAlert('item removed', 'danger');
  setBackToDefault();
  // Remove from local storage
  removeFromLocalStorage(id);
}
// Edit Function
function editItem(){
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // Set From Value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

// Set Back to Default
function setBackToDefault(){
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = "submit"
}

// Local Storage
function addToLocalStorage(id, value){

}

function removeFromLocalStorage(id){

}

function editLocalStorage(id, value){

}

localStorage.setItem('orange', JSON.stringify(['item', 'item2']));
const oranges = JSON.parse(localStorage.getItem('orange'));
localStorage.removeItem("orange")
