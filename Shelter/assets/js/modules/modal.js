import { data } from "../bd.js";

function openModal(id) {
  // console.log(id.id);
  // console.log(data[0]);
  const modalWrap = document.querySelector(".modal-wrap");
  modalWrap.classList.add("show");
  document.body.style.overflow = "hidden";
  modalWrap.innerHTML = `
  <div class="modal-inner">
  <img
    src=${data[id].img}
    alt=${data[id].name}
    class="modal-img"
  />
  <div class="modal-content">
    <h3 class="modal-title">${data[id].name}</h3>
    <h4 class="modal-sub">${data[id].type} - ${data[id].breed}</h4>
    <p class="modal-description">
    ${data[id].description}
    </p>
    <ul>
      <li>Age: ${data[id].age}</li>
      <li>Inoculations: ${data[id].inoculations}</li>
      <li>Diseases: ${data[id].diseases}</li>
      <li>Parasites: ${data[id].parasites}</li>
    </ul>
  </div>
  <div class="close"></div>
</div>`;
  modal();
}
function closeModal(modalSelector) {
  const modalWrap = document.querySelector(".modal-wrap");
  modalWrap.classList.remove("show");
  document.body.style.overflow = "";
}

function modal() {
  const modalWrap = document.querySelector(".modal-wrap"),
    close = document.querySelector(".close");

  modalWrap.addEventListener("click", (el) => {
    if (el.target === modalWrap || el.target === close) {
      closeModal();
    }
  });
}

export default modal;

export { closeModal };
export { openModal };
