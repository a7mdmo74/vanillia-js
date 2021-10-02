let clients = [
  {
    id: 1,
    name: "Sara",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "./imgs/person_1.jpg",
  },
  {
    id: 2,
    name: "Ali",
    text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./imgs/person_2.jpg",
  },
  {
    id: 3,
    name: "Ahmed",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.",
    img: "./imgs/person_3.jpg",
  },
  {
    id: 4,
    name: "Mohamed",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
    img: "./imgs/person_4.jpg",
  },
  {
    id: 5,
    name: "Saad",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    img: "./imgs/person_5.jpg",
  },
  {
    id: 6,
    name: "John",
    text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
    img: "./imgs/person_6.jpg",
  },
];
let carouselContainer = document.querySelector("#carousel");
console.log(clients);
const sections = document.querySelectorAll("section");
const navbar = document.querySelector(".navbar");
const navbarItems = document.querySelector(".navbar-items");
const navLi = document.querySelectorAll(".navbar .nav-item .nav-link");
const gridContainerProp = document.querySelectorAll(".grid-container.d-none");
const propBtn = document.querySelector(".property-btn");
const toggleNav = document.querySelector(".toggle");

toggleNav.addEventListener("click", () => {
  navbarItems.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    //console.log(sectionTop);

    if (scrollY >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  if (pageYOffset >= 200) {
    navbar.style.backgroundColor = "#000";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
  if (pageYOffset >= 400) {
    document.querySelector(".navbar-items").style.margin = "0px";
  } else {
    document.querySelector(".navbar-items").style.margin = "0.5rem 0";
  }
});

propBtn.addEventListener("click", () => {
  gridContainerProp.forEach((prop) => {
    prop.classList.toggle("d-none");
  });
});

let counter = 1;
carouselContainer.innerHTML = `
  <p>"${clients[0].text}"</p>
  <div class="testmonials">
    <img src="${clients[0].img}" />
    <p>${clients[0].name}</p>
  </div>
  <div class="right"><i class="fas fa-chevron-right" onclick="increaseCount()"></i></div>
  <div class="left"><i class="fas fa-chevron-left" onclick="decreaseCount()"></i></div>
`;

const increaseCount = () => {
  const { text, img, id, name } = clients[counter];
  counter++;
  if (counter >= 6) {
    counter = 0;
  }
  console.log(counter);
  carouselContainer.innerHTML = `
  <p>${text}</p>
  <div class="testmonials">
    <img src="${img}" />
    <p>${name}</p>
  </div>
  <div class="right"><i class="fas fa-chevron-right" onclick="increaseCount()"></i></div>
  <div class="left"><i class="fas fa-chevron-left" onclick="decreaseCount()"></i></div>
`;
};

const decreaseCount = () => {
  const { text, img, id, name } = clients[counter];
  counter--;
  if (counter < 0) {
    counter = 5;
  }
  console.log(counter);
  carouselContainer.innerHTML = `
  <p>${text}</p>
  <div class="testmonials">
    <img src="${img}" />
    <p>${name}</p>
  </div>
  <div class="right"><i class="fas fa-chevron-right" onclick="increaseCount()"></i></div>
  <div class="left"><i class="fas fa-chevron-left" onclick="decreaseCount()"></i></div>
`;
};

/* Loader */
let loader = document.getElementById("loader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});
