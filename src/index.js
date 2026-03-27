function displayPoem(response) {
 
 console.log("poem generated");   
 new Typewriter('#poem', {
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
    let prompt = `Generate a haiku based on ${instructionsInput.value}`;
    let context = `You are a grade schooler who likes to write poems. Your mission is to generate a 4 line haiku in basic HTML. Make sure to follow user inputs`;
    let apiUrl = "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}"

    console.log("Generating Poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayPoem);
};

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem);