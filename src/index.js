import "./styles.css";
import { task } from "./todo-item";


const btn = document.getElementById("btn");
const insert = document.getElementById("insert");
let confirmDiv = document.getElementById("confirmInput");
confirmDiv.style.display = "none";
btn.addEventListener("click", () => {
    if(!document.getElementById("input")) {
        insert.style.display = "none";
        task();
    }
}); 



console.log("working");
