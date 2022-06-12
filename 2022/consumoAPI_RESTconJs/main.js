console.log('breaking bad api')

const URL = 'https://www.breakingbadapi.com/api/character/random';

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const img = document.querySelector('img');
    img.src = data[0].img;
  });