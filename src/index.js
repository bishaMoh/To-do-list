import "./styles.css";
import { task } from "./todo-item";


const btn = document.getElementById("btn");
const insert = document.getElementById("insert");
let form = document.getElementById("addForm");
form.style.display = "none";
btn.addEventListener("click", () => {
    if(!document.getElementById("btn2")) {
        insert.style.display = "none";
        task();
    }
}); 



console.log("working");
