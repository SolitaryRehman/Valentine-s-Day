const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");
const yayyyMessage = document.getElementById("yayyyMessage");

let yesScale = 1;
let isNoButtonDetached = false;
let lastPositionIndex = -1; // New variable to store the index of the last applied position class

function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  document.body.appendChild(heart);

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3 to 5 seconds
  heart.style.opacity = Math.random();
  heart.style.fontSize = Math.random() * 10 + 20 + "px"; // 20 to 30px

  setTimeout(() => {
    heart.remove();
  }, 5000); // Remove heart after 5 seconds
}

const introScreen = document.getElementById("introScreen");
const yesScreen = document.getElementById("yesScreen");

yesBtn.addEventListener("click", () => {
  introScreen.style.display = "none";   // hides ALL pics + card
  yesScreen.style.display = "block";    // shows new screen
  setInterval(createHeart, 250);
});


// Position classes for NO button
const positionClasses = [
  'pos-1', 'pos-2', 'pos-3', 'pos-4', 'pos-5', 'pos-6',
  'pos-7', 'pos-8', 'pos-9', 'pos-10', 'pos-11', 'pos-12',
  'pos-13', 'pos-14', 'pos-15'
];
noBtn.addEventListener("mouseenter", () => {
  if (!isNoButtonDetached) {
    noBtn.parentNode.removeChild(noBtn); // Remove from current parent (buttons div)
    document.body.appendChild(noBtn); // Add to body
    isNoButtonDetached = true;
  }

  // Grow the YES button
  yesScale += 1.5;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Remove all position classes
  positionClasses.forEach(cls => noBtn.classList.remove(cls));

  // Pick a random position class that is different from the last one
  let newRandomIndex;
  do {
    newRandomIndex = Math.floor(Math.random() * positionClasses.length);
  } while (newRandomIndex === lastPositionIndex);

  noBtn.classList.add(positionClasses[newRandomIndex]);
  lastPositionIndex = newRandomIndex; // Update last position
});