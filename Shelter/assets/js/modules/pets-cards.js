import { data } from "../bd.js";
import { openModal } from "./modal.js";

const carouselBox = document.querySelector(".carousel-box"),
  petsList = document.querySelector(".pets-list");
let offset = 0,
  page = 1,
  petsCount = 8,
  petsItems,
  itemCount = 48,
  newData = [],
  pageCount = itemCount / petsCount,
  pagArray = ["<<", "<"],
  pagItems;

function petsCards() {
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
    render(parent) {
      const element = document.createElement("div");
      element.classList.add("pets-list-item");
      element.innerHTML = `
          <img
            src=${this.img}
            alt=${this.descr}
            class="pets-list-img"
          />
          <div class="pets-list-title">${this.name}</div>
          <button class="btn pets-list-btn">Learn more</button>`;
      element.dataset.id = this.id;
      parent.append(element);
      petsItems = document.querySelectorAll(".pets-list-item");
    }
  }
  const sortFun = (prev, next) => {
    if (prev.name < next.name) return -1;
    if (prev.name < next.name) return 1;
  };
  [
    ...data.sort((a, b) => a.id - b.id),
    ...data.sort((a, b) => b.id - a.id),
    ...data.sort(sortFun),
    ...data.sort((a, b) => b.id - a.id),
    ...data.sort(sortFun),
    ...data.sort((a, b) => a.id - b.id),
  ].map((el, idx) => {
    newData.push({ ...el });
  });
  console.log(newData);

  function initPets() {
    petsList.innerHTML = "";
    for (let i = offset; i < page * petsCount; i++) {
      console.log(i);
      new CarouselItem(
        newData[i].id,
        newData[i].name,
        newData[i].img,
        newData[i].type,
        newData[i].breed,
        newData[i].description,
        newData[i].age,
        newData[i].inoculations,
        newData[i].diseases,
        newData[i].parasites
      ).render(petsList);
    }

    for (let el of petsItems) {
      el.style.opacity = "1";
      el.addEventListener("click", (el) => {
        openModal(el.currentTarget.dataset.id);
      });
    }
  }

  function pagination() {
    for (let i = 1; i <= pageCount; i++) {
      pagArray.push(i);
    }
    pagArray = [...pagArray, ">", ">>"];
  }

  function initPagination() {
    const pagin = document.querySelector(".pagination");
    pagination();

    pagArray.forEach((element, idx) => {
      const pagElement = document.createElement("div");
      pagElement.classList.add("circle");
      if (element === page) {
        pagElement.classList.add("circle-num");
      }
      pagElement.innerHTML = element;
      if (typeof element === "number") {
        pagElement.dataset.sign = idx - 1;
      }
      pagin.append(pagElement);
      pagItems = document.querySelectorAll(".circle");
    });

    for (let el of pagItems) {
      el.addEventListener("click", (el) => {
        if (el.target.dataset.sign > 0) {
          console.log(el.target.dataset.sign);
          page = el.target.dataset.sign;
          offset = petsCount * page - petsCount;
          initPets();
          // console.log("offset: ", offset);
          // console.log("page: ", page);
        }
      });
    }
    console.log(pagArray);
    console.log(pagArray.length);
  }
  initPets();
  initPagination();
}

export default petsCards;
