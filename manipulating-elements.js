const parentElement = document.querySelector("#parent");

const element = document.createElement("p");
element.textContent = "Hello World";

parentElement.appendChild(element);

parentElement.innerHTML = `<div>Learning DOM Manipulation is awesome</div>`;
