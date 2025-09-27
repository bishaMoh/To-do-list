import "./styles.css";
import { task } from "./todo-item";
import { requestProject, NavProject, ShowProject } from "./projects";


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

// handling the visiblty of the project form
const handlingProjectForm = (function () {
    const projects = document.getElementById("projectBtn");
    projects.addEventListener("click", () => {
        let formDiv = document.getElementById("formDiv");
       if(!formDiv) {
           requestProject();
       }else {
        formDiv.style.display = "block";
        // NavProject().insert();
        // NavProject().shutDown();
       } 
       NavProject();
       ShowProject();
    })
})();





console.log("working");
