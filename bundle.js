let bool = true;
function flipCard() {
  bool = !bool;
  return bool;
}

const card = document.getElementById("card");
const front = document.getElementById("front");
const back = document.getElementById("back");
const flip = document.getElementById("flip");
const skip = document.getElementById("skip");

skip?.addEventListener("click", (e) => {
  location.href =
    "/trivia/" + location.pathname.split("/")[2] + "/" + getRandomNumber();
});

flip?.addEventListener("click", (e) => {
  if (!bool) {
    back?.classList.add("hide");
    back?.classList.remove("show");
    front?.classList.add("show");
    front?.classList.remove("hide");
  } else {
    // clean up when not testing
    front?.classList.add("hide");
    front?.classList.remove("show");
    back?.classList.add("show");
    back?.classList.remove("hide");
  }
  flipCard();
});

front?.addEventListener("click", (e) => {
  if (!bool) {
    back?.classList.add("hide");
    back?.classList.remove("show");
    front?.classList.add("show");
    front?.classList.remove("hide");
  } else {
    // clean up when not testing
    front?.classList.add("hide");
    front?.classList.remove("show");
    back?.classList.add("show");
    back?.classList.remove("hide");
  }
  flipCard();
});

// on hitting the back of the card, next is to move to a new card
back?.addEventListener("click", (e) => {
  location.href =
    "/trivia/" + location.pathname.split("/")[2] + "/" + getRandomNumber();
});

function getRandomNumber() {
  if (location.pathname.includes("film")) {
    return Math.floor(Math.random() * (36 - 1 + 1)) + 1;
  }
  if (location.pathname.includes("audio")) {
    return Math.floor(Math.random() * (37 - 1 + 1)) + 1;
  }
  if (location.pathname.includes("video")) {
    return Math.floor(Math.random() * (38 - 1 + 1)) + 1;
  }
}
