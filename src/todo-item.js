// a function to add a task
export function task() {
        const contentDiv = document.getElementById("content");
        const input = document.createElement("input");
        const addBtn = document.createElement("button");


        contentDiv.innerHTML = "";
        addBtn.textContent = "Confirm";
        contentDiv.appendChild(input);
        contentDiv.appendChild(addBtn);


        addBtn.addEventListener("click", () => {
            if(!input.value) {
                console.log("you must type something");
                return;
            }
                const todoItem = new todo(input.value).title();
                contentDiv.innerHTML = "";
                contentDiv.appendChild(todoItem);
        
        });  
}
// a class to set the todos

class todo {
    constructor(name) {
        this.name = name;
    }

    title() {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const checkbox = document.createElement("input");

        
        checkbox.type = "checkbox";
        li.textContent = `${this.name}`;
        li.appendChild(checkbox);
        ul.appendChild(li);
        return ul;
    }
}