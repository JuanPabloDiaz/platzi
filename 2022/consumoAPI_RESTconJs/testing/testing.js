// CLASE # 1

console.log("this is a testing site");

const URL = "https://rickandmortyapi.com/api/character/161";

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[8].url;
  });