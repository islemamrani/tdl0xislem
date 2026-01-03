const input = document.querySelector(".task");
const add = document.querySelector(".add");
const taskscontainer = document.querySelector(".tasks-container");
const counter = document.querySelector(".count");

let count = 0;

add.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (!taskText) return;

    const newtask = document.createElement("div");
    newtask.classList.add("todo");

    const taskname = document.createElement("h1");
    taskname.classList.add("taskname");
    taskname.innerText = taskText;

    const buttons = document.createElement("div");
    buttons.classList.add("buttons-container");
    buttons.innerHTML = `
        <button class="delete"><i class="fas fa-remove-format"></i></button>
        <button class="finish"><i class="fa-solid fa-check"></i></button>
    `;

    newtask.appendChild(taskname);
    newtask.appendChild(buttons);
    taskscontainer.appendChild(newtask);

    count++;
    counter.innerText = `Tasks: ${count}`;

    input.value = "";
});

taskscontainer.addEventListener("click", (e) => {
    const target = e.target.closest("button");
    if (!target) return;

    const todo = target.closest(".todo");
    const taskname = todo.querySelector(".taskname");

    if (target.classList.contains("finish")) {
        taskname.classList.add("removed");
    }

    if (target.classList.contains("delete")) {
        todo.remove();
        count--;
        counter.innerText = `Tasks: ${count}`;
    }
});
