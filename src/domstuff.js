
function Confirminput() {
    // input.style.display = "inline-block";
    // confirmBtn.style.display = "inline-block";
    const addForm = document.getElementById("addForm");
    let titleFeild = document.getElementById("titleInput");
    let descFeild = document.getElementById("descInput");
    let select = document.getElementById("select");
    let dueDate = document.getElementById("dueDate");
    let confirmBtn = document.getElementById("btn2");

    if(!titleFeild) {
            //<==== Title ====>//
        titleFeild = document.createElement("input");
            titleFeild.id = "titleInput";
            titleFeild.placeholder = "title";

            //<==== Description ====>//
        descFeild = document.createElement("input");
            descFeild.id = "descInput";
            descFeild.placeholder = "description";

            // <==== Priority ====>//
        select = document.createElement("select");
            select.id = "select";
        const opt1 = document.createElement("option");
            opt1.value = "High";
            opt1.textContent = "High";
        const opt2 = document.createElement("option");
            opt2.value = "mideum";
            opt2.textContent = "Midieum";
        const opt3 = document.createElement("option");
            opt3.value = "low";
            opt3.textContent = "Low";

        select.appendChild(opt1);
        select.appendChild(opt2);
        select.appendChild(opt3);

            // <==== dueDate ====> //
        dueDate = document.createElement("input");
            dueDate.type = "date";
            dueDate.id = "dueDate";


            // <==== confrim button ====>//
        confirmBtn = document.createElement("button");
        confirmBtn.id = "btn2";
        confirmBtn.textContent = "Confirm";
        confirmBtn.type = "button";

        addForm.appendChild(titleFeild);
        addForm.appendChild(descFeild);
        addForm.appendChild(select);
        addForm.appendChild(dueDate);
        addForm.appendChild(confirmBtn);
    }

    addForm.style.display = "grid";

    return {
        addForm,
        confirmBtn,
        titleFeild,
        descFeild,
        select,
        dueDate
    }
}
//hiding the desc 
// description should be hidin when adding a task.
// const desc = document.getElementsByTagName("p");
// desc.style.display = "none";
// function description(p) {

// }

export { Confirminput };
