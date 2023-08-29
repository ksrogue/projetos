const pokemons = document.querySelector(".pokemons");
const loadMoreButton = document.querySelector("#loadMoreButton");
const maxRecords = 151;
const limit = 6;
let offset = 0;

function convertPokemon(pokemon) {
  return `   
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.number}.svg" alt="${pokemon.name}">
                </div>
            </li>
    `;
}



function loadPokemonItems(offset, limit) {
  pokeApi
  .getPokemons(offset, limit)
  .then((pokemonList = []) => {
    pokemons.innerHTML += pokemonList.map(convertPokemon).join("");
  })
} 

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecord = offset + limit;

  if(qtdRecord >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItems(offset, newLimit);

    loadMoreButton.style.display = "none";
  } else {
    loadPokemonItems(offset, limit)
  }
})
