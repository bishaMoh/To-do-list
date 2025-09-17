import { Confirminput } from "./domstuff";
import { format } from "date-fns";
// a function to add a task
export function task() {
  
        const confirm = Confirminput();
        const ul = document.getElementById("ul");
        confirm.confirmBtn.addEventListener("click", () => {
            if(!confirm.titleFeild.value) {
                console.log("you must type something");
                return;
            };

            const todoItem = new todo(
                confirm.titleFeild.value,
                confirm.descFeild.value,
                confirm.select.value,
                confirm.dueDate.value,
            );
            ul.appendChild(todoItem.render());

            confirm.addForm.innerHTML = "";
            confirm.addForm.style.display = "none";

            
            const insert = document.getElementById("insert");
            insert.style.display = "flex";
            
        });  
}
// a class to set the todos

class todo {
    constructor(name, description, priority, date) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }

    title() {
        const item = create(`${this.name}`);
        return item;
    }

    render() {
        const li = document.createElement("li");
      
        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
      
        // Title
        const span = document.createElement("span");
        span.textContent = this.name;
        span.id = "span1";
      
        // Priority
        const span2 = document.createElement("span");
        span2.textContent = this.priority;
        span2.id = "span2";
      
        
        const details = document.createElement("div");
        details.classList.add("todo-details");
        details.style.display = "none"; 
      
        
        const p = document.createElement("p");
        p.textContent = this.description;
      
        
        const dueDate = document.createElement("small");
        if (this.date) {
          const formatted = format(new Date(this.date), "MM/dd/yyyy");
          dueDate.textContent = `Due: ${formatted}`;
        }
      
        details.appendChild(p);
        details.appendChild(dueDate);
      
      
        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Details";
        toggleBtn.classList.add("details-btn");
      
        toggleBtn.addEventListener("click", () => {
          if (details.style.display === "none") {
            details.style.display = "block";
            toggleBtn.textContent = "Hide";
          } else {
            details.style.display = "none";
            toggleBtn.textContent = "Details";
          }
        });
      
        
        checkbox.addEventListener("change", () => {
          span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });
      
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(span2);
        li.appendChild(toggleBtn);
        li.appendChild(details);
      
        return li;
      }
      }