const url = "https://dog.ceo/api/breeds/image/random";

const refreshImage = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const dogImage = data.message;

    const img = document.querySelector("#dog");

    img.src = dogImage;
  });
}

refreshImage();