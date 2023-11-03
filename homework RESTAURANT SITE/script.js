const menuItems = [
  {
    name: "Burger and fries",
    description: "The best burger with delicious fries",
    price: "15$",
    image: "images/Burger-and-Fries.jpg",
  },
  {
    name: "Pizza",
    description: "The best pizza in the world",
    price: "13.99$",
    image: "images/pizza.jpg",
  },
  {
    name: "Frenc fries",
    description: "The best fries in the world",
    price: "5.99$",
    image: "images/french_fries_thumb_1689232255152_1689232269838.avif",
  },
  {
    name: "Pasta",
    description: "The best pasta in the world",
    price: "17$",
    image: "images/pasta.avif",
  },
  {
    name: "Pepperoni",
    description: "The best pizza in the world",
    price: "11.5$",
    image: "images/b05a0af72ad845f3a6abe16143d7853a.jpg",
  },
  {
    name: "Sushi",
    description: "The best sushi in the world",
    price: "20$",
    image: "images/istockphoto-1053854126-612x612.jpg",
  },
];

const container2 = document.querySelector(".container2");

const menuWrapper = document.createElement("div");
menuWrapper.classList.add("menu-wrapper");

container2.appendChild(menuWrapper);

menuItems.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;
  image.classList.add("card-image");

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("card-content");

  const heading = document.createElement("h2");
  heading.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = item.price;

  const button = document.createElement("button");
  button.textContent = "Order Now";
  button.classList.add("order-now-button");

  button.addEventListener("click", function() {
    const pageURL = "purchase.html";
    window.location.href = pageURL;
});

  document.body.appendChild(button);
  contentContainer.appendChild(heading);
  contentContainer.appendChild(description);
  contentContainer.appendChild(price);
  card.appendChild(image);
  contentContainer.appendChild(button);
  card.appendChild(contentContainer);
  menuWrapper.appendChild(card);
});
