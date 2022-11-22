const form = document.querySelector("form");
const inputText = document.getElementById("inputText");
const todoContainer = document.querySelector(".todo-con");
// const todoContainer = document.getElementById("todo-con");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

//
let todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}
function addTodo(elem) {
  let newTodo = document.createElement("div");
  newTodo.classList.add("Newtodo");
  let todoText = inputText.value;
  if (elem) {
    todoText = elem.inputText;
  }
  // todoCollection===newTodo
  if (todoText) {
    newTodo.innerHTML = `
    <div
    class="todo-li dark:bg-vDarkDesaturatedBlue bg-vLightGray flex items-center py-[1rem] px-[0.9rem] rounded-t-lg"
  >
    <div
      class="check w-[20px] h-[20px] border-[1px] border-vDarkGrayBlue rounded-full grid place-content-center mr-[1rem] cursor-pointer ${
        elem && elem.complete ? "active-check" : ""
      }" 
    >
      <img
        src="dist/images/icon-check.svg"
        alt="check-icon"
        class="transform scale-0 transition-all duration-[0.3s] ease-linear"
      />
    </div>
    <p class="w-[92%] paraTags ${
      elem && elem.complete ? "complete" : ""
    } dark:text-vLightGray text-vDarkGrayBlue  text-[18px] font-JosefinSans">${todoText}</p>
    <button
      class="close opacity-0 transition-all duration-[0.4s] ease hover:opacity-100 cursor-pointer"
    >
      <img src="dist/images/icon-cross.svg" alt="cross-icon" />
    </button>
  </div>
  <div class="line w-full dark:bg-darkGrayBlue bg-lightGrayBlue h-[0.8px]"></div>`;
    todoContainer.appendChild(newTodo);
    localStorageUpdate();
  }
  let close = newTodo.querySelector(".close");
  // console.log(newTodo);
  // console.log(close);
  close.addEventListener("click", () => {
    newTodo.remove();
    localStorageUpdate();
  });

  let check = newTodo.querySelector(".check");
  check.addEventListener("click", () => {
    check.classList.toggle("active-check")
      ? newTodo.children[0].children[1].classList.add("complete")
      : newTodo.children[0].children[1].classList.remove("complete");
    localStorageUpdate();

    // check.classList.toggle("active-check")
    //   ? newTodo.children[0].children[1].classList.add("complete")
    //   : newTodo.children[0].children[1].classList.remove("complete");
    // if (check.classList.add('active-check')){

    // }

    console.log(newTodo.children);
    // Grabbing the todo-li [0]
    // console.log(newTodo.children[0]);
    // console.log(newTodo.children[0].children);
    // Grab p element
    console.log(newTodo.children[0].querySelector("p"));
    console.log(newTodo.children[0].children[1]);
    // add classList strike through when the user clicks
    // newTodo.children[0].children[1].classList.add("complete");
  });
}

// ADD to local storage
function localStorageUpdate() {
  let paraTags = document.querySelectorAll(".paraTags");
  // console.log(paraTag);
  let arr = [];
  paraTags.forEach((paraTag) => {
    // For each para
    arr.push({
      inputText: paraTag.innerText,
      complete: paraTag.classList.contains("complete"),
    });
  });
  // setItem takes in two params::item to set and then the JSON.STRINGIFY(Converts JS objects into strings)
  localStorage.setItem("todos", JSON.stringify(arr));
}

// Working on the info section
let info = document.querySelectorAll(".choice p");
// console.log(info);
let todoLi = document.querySelectorAll(".Newtodo");
console.log(todoLi);

// Cycle through p Nodelist
info.forEach((pTag) => {
  // For each p in the nodelist we add event Listener
  pTag.addEventListener("click", () => {
    info.forEach((eachPElement) => {
      // Others that werent clicked on
      eachPElement.classList.remove("active");
    });
    // The particular pTag we click on should be have 'active' added
    pTag.classList.add("active");
    if (pTag.innerText == "Active") {
      todoLi.forEach((element) => {
        // The ptag [1]::Active doesnt contains class of 'complete'
        if (!element.children[0].children[1].classList.contains("complete")) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    } else if (pTag.innerText == "Completed") {
      todoLi.forEach((element) => {
        if (element.children[0].children[1].classList.contains("complete")) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      });
    } else {
      todoLi.forEach((element) => {
        element.style.display = "block";
      });
    }
  });
});
