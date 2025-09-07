import "./styles.css";
import { task } from "./todo-item"

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    task();
})
console.log("working");
