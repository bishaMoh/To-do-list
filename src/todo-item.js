import { Confirminput } from "./domstuff";
// a function to add a task
export function task() {
  
        const confirm = Confirminput();
        const ul = document.getElementById("ul");
        confirm.confirmBtn.addEventListener("click", () => {
            if(!confirm.titleFeild.value) {
                console.log("you must type something");
                return;
            };

            const todoItem = new todo(confirm.titleFeild.value, confirm.descFeild.value);
            ul.appendChild(todoItem.render());

            confirm.addForm.innerHTML = "";
            confirm.addForm.style.display = "none";

            
            const insert = document.getElementById("insert");
            insert.style.display = "flex";
            
        });  
}
// a class to set the todos

class todo {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    title() {
        const item = create(`${this.name}`);
        return item;
    }

    render() {
        const li = document.createElement("li");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = `${this.name}`;

        const p = document.createElement("p");
        p.textContent = `${this.description}`;

        checkbox.addEventListener("change", (e) => {
            span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(p);
        
        return li;
    };
}