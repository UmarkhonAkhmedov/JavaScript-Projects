// Selecte Items
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
    list.appendChild(element);
    displayAlert('item added to the list', 'success');
    container.classList.add("show-container")
    addToLocalStorage(id, value);
    setBackToDefault();

  }else if(value && editFlag){
    console.log('editing')
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
