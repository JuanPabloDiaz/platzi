
console.log("this is a testing site");

const URL = "https://api.escuelajs.co/api/v1/products/1";

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].image;
  });