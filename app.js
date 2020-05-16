// === SELECTORS ===
const list = document.querySelector(".todo__list");
const form = document.querySelector(".todo__form");
const formInput = document.querySelector(".todo__form-input");

// === FUNCTIONS ===
const addNewItem = (e) => {
  // prevent default form submission
  e.preventDefault();
  const btn = e.target.closest(".todo__form-btn");
  if (e.target !== btn) return;

  //create div element
  let newDiv = document.createElement("div");
  newDiv.className = "todo__list--container";

  //create checkbox input add append to div
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo__list--check";
  newDiv.appendChild(checkbox);

  //create li and append to div
  const listItem = document.createElement("li");
  listItem.innerText = formInput.value;
  newDiv.appendChild(listItem);

  //create trash button and append icon to trash button then append btn to div
  const trash = document.createElement("button");
  trash.className = "todo__list--trash";
  trash.innerHTML = '<i class="fas fa-trash-alt"></i>';
  newDiv.appendChild(trash);

  //append the div to list
  list.appendChild(newDiv);

  //clear input field
  formInput.value = "";
};

const deleteItem = (e) => {
  // delete only if trash button is clicked!
  const deleteBtn = e.target.closest(".todo__list--trash");
  if (e.target !== deleteBtn) return;
  const newItem = e.target.parentElement;

  // Add transition
  newItem.classList.add("scaleOut");

  //delete after atransition ends
  newItem.addEventListener("transitionend", () => {
    newItem.remove();
  });
};

// === EVENT LISTENERS ===
form.addEventListener("click", addNewItem);
list.addEventListener("click", deleteItem);

list.addEventListener("change", (e) => {
  // If checkbox was clicked add selected class to parent
  if (e.target !== e.target.closest(".todo__list--check")) return;
  e.target.parentElement.classList.toggle("selected");
});
