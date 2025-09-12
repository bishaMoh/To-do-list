function create(title) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const span = document.createElement("span");

    input.setAttribute("type", "checkbox");
    span.textContent = `${title}`;
    input.addEventListener("change", () => {
        span.style.textDecoration = input.checked ? "line-through" : "none";
    });

    li.appendChild(input);
    li.appendChild(span);
    
    return li;
}

function Confirminput() {
    const confirmDiv = document.getElementById("confirmInput");
    confirmDiv.style.display = "flex";
    let input = document.getElementById("input");
    let confirmBtn = document.getElementById("btn2");

    if(!input) {
         input = document.createElement("input");
        input.id = "input";
         confirmBtn = document.createElement("button");
        confirmBtn.id = "btn2";


        confirmDiv.appendChild(confirmBtn);
        confirmDiv.appendChild(input);
        confirmBtn.textContent = "confirm";
    }
    input.style.display = "inline-block";
    confirmBtn.style.display = "inline-block";


    return {
        confirmDiv,
        confirmBtn,
        input
    }
}





export { create, Confirminput };