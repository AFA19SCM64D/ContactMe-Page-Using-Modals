'use strict';

const modalOne = document.querySelector(".modal-one");
const modalTwo = document.querySelector(".modal-two");
const overlay = document.querySelector(".overlay");
const btnCloseModalOne = document.querySelector(".close-modal-one");
const btnCloseModalTwo = document.querySelector(".close-modal-two");
const btnOpenModalOne = document.querySelector(".show-modal-one");
const btnOpenModalTwo = document.querySelector(".show-modal-two");

//function to close modal
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};


btnOpenModalOne.addEventListener("click", function () {
    modalOne.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

btnOpenModalTwo.addEventListener("click", function () {
    modalTwo.classList.remove("hidden");
    overlay.classList.remove("hidden");
});

btnCloseModalOne.addEventListener("click", function () {
    modalOne.classList.add("hidden");
    overlay.classList.add("hidden");
});

btnCloseModalTwo.addEventListener("click", function () {
    modalTwo.classList.add("hidden");
    overlay.classList.add("hidden");
});

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (!modalOne.classList.contains("hidden")) {
            modalOne.classList.add("hidden");
            overlay.classList.add("hidden");
        } else if (!modalTwo.classList.contains("hidden")) {
            modalTwo.classList.add("hidden");
            overlay.classList.add("hidden");
        }
    }
});
