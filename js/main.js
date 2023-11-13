//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const poke = document.querySelector("input").value;
  const url = "https://pokeapi.co/api/v2/pokemon/" + poke;
  let pokeData = [];
  let pokeImg = [];

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
        pokeData.push(data.types[0].type.name);
        pokeImg.push(data.sprites.front_shiny);

      //   if (pokeStore[0] === "grass" && pokeStore[1] === "water") {
      document.querySelector("#pokeImg1").src = pokeImg[0];
      // document.querySelector("h2").innerText = " 2x > ";
      //   }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
