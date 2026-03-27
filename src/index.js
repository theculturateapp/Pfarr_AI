function generatePoem(event) {
    event.preventDefault();

    alert("Generating poem");
};

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);