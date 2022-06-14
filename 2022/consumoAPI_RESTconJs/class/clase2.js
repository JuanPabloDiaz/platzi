// CLASE # 2

console.log("Hello, world");

const API_URL = "https://api.thecatapi.com/v1/images/search";

async function reload() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const img = document.querySelector("img");
  img.src = data[0].url;
}
reload();
