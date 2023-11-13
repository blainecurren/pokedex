//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const poke = document.querySelector("input").value.toLowerCase();
  const url = "https://pokeapi.co/api/v2/pokemon/" + poke;
  let pokeType = [];
  let pokeWeight = [];
  let pokeHeight = [];
  let pokeNo = [];
  let pokeImg = [];

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      pokeType.push(data.types[0].type.name);
      pokeWeight.push(data.weight);
      pokeHeight.push(data.height);
      pokeNo.push(data.id);
      pokeImg.push(data.sprites.front_shiny);

      document.querySelector("#pokeImg1").src = pokeImg[0];
      document.querySelector("#type").innerText = "Type: " + pokeType[0];
      document.querySelector("#weight").innerText = "Weight: " + pokeWeight;
      document.querySelector("#height").innerText = "Height: " + pokeHeight;
      document.querySelector("#number").innerText = "No. " + pokeNo;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
