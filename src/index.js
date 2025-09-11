import "./styles.css";
import { task } from "./todo-item";


const btn = document.getElementById("btn");
let confirmDiv = document.getElementById("confirmInput");

btn.addEventListener("click", () => {
    if(!document.getElementById("input")) {
        btn.style.display = "none";
        task();
    }else {
        alert("confirm your to-do first");
    }
}); 



console.log("working");
