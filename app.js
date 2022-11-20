const form = document.querySelector("form");
const inputText = document.getElementById("inputText");
let todoContainer = document.getElementById("todo-con");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = inputText.value;
  let htmlString = document.querySelector(".createDiv");
  htmlString.innerHTML = `<div
    class="todo-li bg-vDarkDesaturatedBlue dark:bg-vLightGray flex items-center py-[1rem] px-[0.9rem]"
   >
     <div
      class="check w-[20px] h-[20px] border-[1px] border-vDarkGrayBlue rounded-full grid place-content-center mr-[1rem] cursor-pointer"
     >
      <img
       src="images/icon-check.svg"
       alt="check-icon"
       class="transform scale-0 transition-all duration-[0.3s] ease-linear"
    />
    </div>
   <p class="w-[92%] text-white dark:text-black text-[18px] font-JosefinSans">${todoText}</p>
   <button
     class="close opacity-0 transition-all duration-[0.4s] ease hover:opacity-100 cursor-pointer"
    >
  <img src="images/icon-cross.svg" alt="cross-icon" />
    </button>
  </div>
   <div class="line w-full bg-vDarkGrayBlue h-[0.9px]"></div>`;
  todoContainer += htmlString;
  const close = document.getElementById("close");
  close.addEventListener("click", () => {
    htmlString.remove();
  });
}
