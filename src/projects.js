// add a new project
function requestProject() {
    // create the form
    const formDiv = document.createElement("div");
        formDiv.id = "formDiv";
    const form = document.createElement("form");
        form.id = "overlayForm";
    const name = document.createElement("input");
        name.id = "projectName";
        name.placeholder = "Name";
    const btn = document.createElement("button");
        btn.id = "create";
        btn.type = "button";
        btn.textContent = "Create";
    const btn2 = document.createElement("button");
        btn2.id = "close";
        btn2.type = "button";
        btn2.textContent = "Close";

    form.appendChild(name);
    form.appendChild(btn);
    form.appendChild(btn2);
    formDiv.appendChild(form);
    document.body.appendChild(formDiv);
}

function NavProject() {
    const projectName = document.getElementById("projectName");
    const formDiv = document.getElementById("formDiv");
    const close = document.getElementById("close");
    const create = document.getElementById("create");
        create.addEventListener("click", () => {
            if(projectName.value === "") {
                alert("you must enter a name for the project");
                return;
            }

            const projects = document.getElementById("projects");
            const h3 = document.createElement("h3");
                h3.textContent = `${projectName.value}`;
            projects.appendChild(h3);
            const formDiv = document.getElementById("formDiv");
            formDiv.style.display = "none";
            projectName.value = "";
        });
    
    
        close.addEventListener("click", () => {
            formDiv.style.display = "none";
        })


}

function ShowProject() {
    const project = document.querySelectorAll(h3)
    project.forEach(document.addEventListener("click", () => {
        const content = document.getElementById("content");
        content.innerHTML = "";
        let ul = document.getElementsByName("ul");
        if(!ul) {
            ul = document.createElement("ul");
        }
    }))
}

function manipulateContent() {
    const ul = document.getElementById("ul");
    ul.innerHTML = "";

}

export { requestProject, NavProject, ShowProject }



