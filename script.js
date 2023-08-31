const addTodo = () => {
    const todoListUl = document.querySelector("#todo-list");
    const todoForm = document.querySelector("#todoForm");
    const todoInput = document.querySelector("#todoInput"); 

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoValue = todoInput.value.trim();

        if (todoValue === "") return;

        if (todoValue.length > 120) {
            alert("Your Todo is too Long")
            return;
        };

        const li = document.createElement("li");

        li.classList.add("todo-list__item");

        li.innerHTML = `
            <div class="todo-list__info">
                <p class="todo-list__text">${todoValue}</p>
                <span class="todo-list__status">⛔</span>
            </div>
            <div class="todo-list__buttons">
                <div class="buttons">
                    <button class="btn check-todo-btn">Check</button>
                    <button class="btn remove-todo-btn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="todo-list__tel-buttons">
                <button class="btn tel-todo-btn tel-check-todo-btn">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="btn tel-todo-btn tel-remove-todo-btn">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        const todoStatus = li.querySelector(".todo-list__status");
        const checkBtn = li.querySelector(".check-todo-btn");
        const telCheckBtn = li.querySelector(".tel-check-todo-btn")
        const removeBtn = li.querySelector(".remove-todo-btn");
        const telRemoveBtn = li.querySelector(".tel-remove-todo-btn");

        const clickTodoBtn = (checkBtn, removeBtn) => {
            checkBtn.addEventListener("click", () => {
                li.classList.toggle("checked");
    
                if (li.classList.contains("checked")) {
                    todoStatus.textContent = "✅";
                    if (checkBtn.textContent === "Check") checkBtn.textContent = "Uncheck"
                    else {
                        checkBtn.querySelector("i").classList.remove("fa-check");
                        checkBtn.querySelector("i").classList.add("fa-xmark");
                    };
                } else {
                    todoStatus.textContent = "⛔";
                    if (checkBtn.textContent === "Uncheck") checkBtn.textContent = "Check";
                    else {
                        checkBtn.querySelector("i").classList.remove("fa-xmark");
                        checkBtn.querySelector("i").classList.add("fa-check");
                    };
                }
                
                removeBtn.addEventListener("click", () => {
                    li.remove();
                });
            });
    
            
        }

        clickTodoBtn(checkBtn, removeBtn);
        clickTodoBtn(telCheckBtn, telRemoveBtn);

        todoListUl.appendChild(li);
        todoInput.value = "";
    });
};

addTodo();
