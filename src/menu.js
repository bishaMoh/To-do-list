function menu() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = '';

    const dishes = document.createElement("h3");

    dishes.textContent = "Dishes";

    const list =  new dish("fool", "10$").link();

    contentDiv.appendChild(dishes);
    contentDiv.appendChild(list);

}

class dish {
    constructor(name, prise) {
        this.name = name;
        this.prise = prise;
    }
    
    link() {
        const dishesList = document.createElement("ul");
        const listItem = document.createElement("li");
        
        listItem.textContent = `${this.name} and its prise is ${this.prise}`;
        dishesList.appendChild(listItem);

        return dishesList;
    }
    
}


export {menu};