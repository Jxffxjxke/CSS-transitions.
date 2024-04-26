const runTransitions = document.getElementById("animation-button");
const elements = document.getElementsByClassName("head-cont")[0]?.children;

function resetAnimationClasses() {

  if (elements) {
    for (const el of elements) {
      el.classList.remove("animate", "slideInLeft", "slideInRight", "rotate");
    }
  }
}

function runAnimations() {

  if (elements && elements.length >= 4) {
    resetAnimationClasses();

    elements[1].classList.add("animate", "slideInLeft");
    elements[2].classList.add("animate", "slideInRight");
    elements[3].classList.add("animate", "rotate");
    elements[1].addEventListener("animationend", resetAnimationClasses);
    elements[2].addEventListener("animationend", resetAnimationClasses);
    elements[3].addEventListener("animationend", resetAnimationClasses);
  }
}
runTransitions.addEventListener("click", runAnimations);
