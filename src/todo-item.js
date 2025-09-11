import { create, Confirminput } from "./domstuff";
// a function to add a task
export function task() {
  
        const confirm = Confirminput();
        const ul = document.querySelector(".list");
        confirm.confirmBtn.addEventListener("click", () => {
            if(!confirm.input.value) {
                console.log("you must type something");
                return;
            };

            const todoItem = new todo(confirm.input.value).title();
            
            console.log(todoItem);
            ul.appendChild(todoItem);
            confirm.confirmDiv.innerHTML = "";
            
            const add = document.getElementById("btn");
            add.style.display = "inline-block";
        });  
}
// a class to set the todos

class todo {
    constructor(name) {
        this.name = name;
    }

    title() {
        const item = create(`${this.name}`);
        return item;
    }
}