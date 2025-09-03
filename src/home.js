export function loadContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent = "Al-shaigei Restaurant";

    contentDiv.appendChild(h1);
}