function displayPoem(response) { 
 new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "37674b4ao471bb32b44ta37b064ef2da";
    let context = "You are a grade schooler who likes to write poems. Write a three line haiku based on ${instructionsInput}. The output should be in HTML format, but should not display `HTML` or `html`.  Sign the poem as `SheCodes AI` on the fourth line in bold font.";
    let prompt = `Generate a haiku based on ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = <div class="generating">`⏱ Generating Haiku about ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);