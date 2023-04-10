import { data } from "../bd.js";
import { openModal } from "./modal.js";

function cards() {
  const carouselBox = document.querySelector(".carousel-box"),
    nextArrow = document.querySelector(".arrow-right"),
    prewArrow = document.querySelector(".arrow-left");
  let offset = 0,
    slideCount = 0,
    oldCashe = new Set(),
    carouselItems,
    newCashe = new Set();

  function getRandomArrey(min = 0, max = (slideCount = 8)) {
    min = Math.ceil(min);
    max = Math.floor(max);
    newCashe.forEach(function (value) {
      oldCashe.add(value);
    });
    newCashe.clear();
    while (newCashe.size !== 3) {
      let a = Math.floor(Math.random() * (max - min)) + min;
      if (!oldCashe.has(a)) {
        newCashe.add(a);
      }
    }
    oldCashe.clear();
    newCashe.forEach(function (value) {});
    let result = [];
    newCashe.forEach(function (value) {
      result.push(value);
    });
    return result;
  }

  class CarouselItem {
    constructor(
      id,
      name,
      img,
      type,
      breed,
      description,
      age,
      inoculations,
      diseases,
      parasites
    ) {
      this.id = id;
      this.name = name;
      this.img = img;
      this.type = type;
      this.breed = breed;
      this.description = description;
      this.age = age;
      this.inoculations = inoculations;
      this.diseases = diseases;
      this.parasites = parasites;
    }
    render() {
      const element = document.createElement("div");
      element.classList.add("carousel-item");
      element.innerHTML = `
        <img
          src=${this.img}
          alt=${this.descr}
          class="carousel-img"
        />
        <div class="carousel-title">${this.name}</div>
        <button class="btn carousel-btn">Learn more</button>`;
      element.dataset.id = this.id;
      carouselBox.append(element);
      carouselItems = document.querySelectorAll(".carousel-item");
    }
  }

  function init() {
    getRandomArrey().forEach((element) => {
      new CarouselItem(
        data[element].id,
        data[element].name,
        data[element].img,
        data[element].type,
        data[element].breed,
        data[element].description,
        data[element].age,
        data[element].inoculations,
        data[element].diseases,
        data[element].parasites
      ).render(element);
    });

    for (let el of carouselItems) {
      el.style.opacity = "1";
      el.addEventListener("click", (el) => {
        openModal(el.currentTarget.dataset.id);
      });
    }
  }

  // carouselBox.style.width = `${slideCount * (270 + 90)}px`;

  function next() {
    carouselBox.innerHTML = "";
    init();
  }
  function prew() {
    carouselBox.innerHTML = "";
    init();
  }
  nextArrow.addEventListener("click", next);
  prewArrow.addEventListener("click", prew);

  init();
}

export default cards;
