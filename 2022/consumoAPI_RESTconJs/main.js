console.log("breaking bad api");

const URL = "https://www.breakingbadapi.com/api/character/random";

// fetch(URL)
//   .then(res => res.json())
//   .then(data => {
//     const img = document.querySelector('img');
//     img.src = data[0].img;
//   });

async function reload_random_img() {
  const res = await fetch(URL);
  const data = await res.json();
  const img = document.querySelector("img");
  img.src = data[0].img;
}

const myButton = document.querySelector("button");
myButton.onclick = reload_random_img;

reload_random_img();
