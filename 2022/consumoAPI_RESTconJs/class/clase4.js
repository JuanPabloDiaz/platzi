// CLASE # 4

// Here's my API key for this project:
// cff65010-e85e-45f5-a948-45dd27cac97c

console.log("using an API KEY");

// Endpoints y query parameters:
// ?limit=3

const API_KEY = "cff65010-e85e-45f5-a948-45dd27cac97c";

const API_URL = [
  "https://api.thecatapi.com/v1/images/search",
  "?limit=3",
  `&api_key=${API_KEY}`,
].join("");

// console.log('API_URL-> ', API_URL);
// console.log('key -> ', API_KEY);


async function reload() {
  const res = await fetch(API_URL);
  const data = await res.json();

  console.log(data);
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");

  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;
}
reload();
