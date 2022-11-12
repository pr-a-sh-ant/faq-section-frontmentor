"use strict";

const qnBox = document.querySelectorAll(".secondary-heading");

qnBox.forEach((e) => {
  e.addEventListener("click", function () {
    qnBox.forEach((e) => {
      e.closest(".box-question")
        .querySelector(".qn-answer")
        .classList.add("hidden");

      if (e.classList.contains("qn-active")) e.classList.remove("qn-active");
    });
    e.closest(".box-question")
      .querySelector(".qn-answer")
      .classList.remove("hidden");
    e.classList.add("qn-active");
  });
});
