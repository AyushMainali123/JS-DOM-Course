const traditionalClickButton = document.querySelector("#traditional-click-button");
const eventClickButton = document.querySelector("#event-click-button");

// Invoked by Inline Event Listner
const inlineClickFunction = () => {
    console.log("Inline Function Clicked");
    console.log(2 + 2);
};

// Invoked by Traditional Event Handlers
traditionalClickButton.onclick = () => {
    console.log("Traditional Click Button Clicked");
    console.log(2 + 2);
}

// Invoked By Event Handlers
eventClickButton.addEventListener("click", () => {
    console.log("Event Click Button Clicked");
    console.log(2 + 2);
});