function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let userInstruction = document.querySelector("#user-instruction");
  let apiKey = "bff36b2oa8f7958b9t0a4de54761058c";
  let prompt = `User Instruction: Generate a English poem about ${userInstruction.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate 4 line poem in basic HTML format <br/> between sentences but do not show the html in poem. Make sure to follw the user Instructions. Do not include a title. Sign the poem with 'SheCodes AI' inside a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
