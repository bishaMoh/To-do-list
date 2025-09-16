
function Confirminput() {
    // input.style.display = "inline-block";
    // confirmBtn.style.display = "inline-block";
    const addForm = document.getElementById("addForm");
    let titleFeild = document.getElementById("titleInput");
    let descFeild = document.getElementById("descInput");
    let confirmBtn = document.getElementById("btn2");

    if(!titleFeild) {
        titleFeild = document.createElement("input");
        titleFeild.id = "titleInput";
        titleFeild.placeholder = "title";

        descFeild = document.createElement("input");
        descFeild.id = "descInput";
        descFeild.placeholder = "description";

        confirmBtn = document.createElement("button");
        confirmBtn.id = "btn2";
        confirmBtn.textContent = "Confirm";
        confirmBtn.type = "button";

        addForm.appendChild(titleFeild);
        addForm.appendChild(descFeild);
        addForm.appendChild(confirmBtn);
    }

    addForm.style.display = "flex";

    return {
        addForm,
        confirmBtn,
        titleFeild,
        descFeild
    }
}
//hiding the desc 
// description should be hidin when adding a task.
// const desc = document.getElementsByTagName("p");
// desc.style.display = "none";
// function description() {
//     const details = 
// }

export { Confirminput };
