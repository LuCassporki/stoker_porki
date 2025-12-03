const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

const slides = document.querySelectorAll(".slide");
// console.log(slides);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;

    const slideActive = document.querySelector(".active");

    // console.log([...slides].indexOf(slideActive));
    newIndex = calcNextSlide + [...slides].indexOf(slideActive);
    // console.log(newIndex);
    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
});
