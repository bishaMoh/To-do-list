export function contact() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    
    const content = document.createElement("p");

    content.textContent = "0113948432";

    contentDiv.appendChild(content);
}