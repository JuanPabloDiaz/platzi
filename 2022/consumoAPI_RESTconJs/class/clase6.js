// CLASE # 6   POST

// Here's my API key for this project:    cff65010-e85e-45f5-a948-45dd27cac97c

const API_URL_RANDOM =
  "https://api.thecatapi.com/v1/images/search?limit=2&api_key=cff65010-e85e-45f5-a948-45dd27cac97c";
const API_URL_FAVORITES =
  "https://api.thecatapi.com/v1/favourites?limit=2&api_key=cff65010-e85e-45f5-a948-45dd27cac97c";

const spanError = document.getElementById("error");

async function loadRandomMichis() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log("Random");
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Error: " + res.status;
  } else {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavouriteMichis() {
  const res = await fetch(API_URL_FAVORITES);
  const data = await res.json();
  console.log("Favoritos");
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Error: " + res.status + data.message;
  }
}

async function saveFavouriteMichis() {
  const res = await fetch(API_URL_FAVORITES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_id: "dje",
    }),
  });
  const data = await res.json();

  console.log("Save", res);

  if (res.status !== 200) {
    spanError.innerHTML = "Error: " + res.status + data.message;
  }
}

loadRandomMichis();
loadFavouriteMichis();
