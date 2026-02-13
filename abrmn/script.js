let heartInterval = null;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");
const yayyyMessage = document.getElementById("yayyyMessage");

let yesScale = 1;
let isNoButtonDetached = false;
let lastPositionIndex = -1; // New variable to store the index of the last applied position class

function createHeart() 
{
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

yesBtn.addEventListener("click", () => 
  {
    introScreen.style.display = "none";

    if (noBtn) {
      noBtn.remove();
    }

    yesScreen.classList.remove("hidden");
    yesScreen.classList.remove("fade-in"); // reset
    void yesScreen.offsetWidth;            // force reflow
    yesScreen.classList.add("fade-in");    // replay animation

    heartInterval = setInterval(createHeart, 250);

  });


// Position classes for NO button
const positionClasses = [
  'pos-1', 'pos-2', 'pos-3', 'pos-4', 'pos-5', 'pos-6',
  'pos-7', 'pos-8', 'pos-9', 'pos-10', 'pos-11', 'pos-12',
  'pos-13', 'pos-14', 'pos-15'
];
noBtn.addEventListener("mouseenter", () => 
  {
    if (!isNoButtonDetached) 
      {
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


const giftBoxes = document.querySelectorAll(".gift-box");
const gift1Screen = document.getElementById("gift1Screen");

giftBoxes[0].addEventListener("click", () => 
  {
    yesScreen.style.display = "none";

    // 🛑 Stop hearts
    if (heartInterval) 
      {
      clearInterval(heartInterval);
      heartInterval = null;
      }

    gift1Screen.style.display = "block";  
    gift1Screen.classList.remove("fade-in");
    void gift1Screen.offsetWidth;
    gift1Screen.classList.add("fade-in");
  });

const gift2Screen = document.getElementById("gift2Screen");

// Gift 2 click
giftBoxes[1].addEventListener("click", () => 
  {
    yesScreen.style.display = "none";

    // stop hearts
    if (heartInterval) 
      {
      clearInterval(heartInterval);
      heartInterval = null;
      }

    gift2Screen.style.display = "block";
    gift2Screen.classList.remove("fade-in");
    void gift2Screen.offsetWidth;
    gift2Screen.classList.add("fade-in");
  });

// Back from Gift 2
const backToYesFromGift2 = document.getElementById("backToYesFromGift2");

backToYesFromGift2.addEventListener("click", () => 
  {
    gift2Screen.style.display = "none";

    yesScreen.style.display = "block";
    yesScreen.classList.remove("fade-in");
    void yesScreen.offsetWidth;
    yesScreen.classList.add("fade-in");

    // restart hearts
    heartInterval = setInterval(createHeart, 250);
  });



const backBtn = document.getElementById("backToYes");

backBtn.addEventListener("click", () => 
  {
    gift1Screen.style.display = "none";

    yesScreen.style.display = "block";
    yesScreen.classList.remove("fade-in");
    void yesScreen.offsetWidth;
    yesScreen.classList.add("fade-in");

    // 💖 Restart hearts
    heartInterval = setInterval(createHeart, 250);
  });


const gift3Screen = document.getElementById("gift3Screen");

// Function to create big kiss
function createKiss() 
  {
    const kiss = document.createElement("img");
    kiss.src = "kiss.png";
    kiss.classList.add("kiss");

    document.body.appendChild(kiss);

    kiss.style.left = Math.random() * 90 + "vw";
    kiss.style.top = Math.random() * 90 + "vh";
    kiss.style.width = Math.random() * 60 + 100 + "px";

    setTimeout(() =>
      {
      kiss.remove();
      }, 3500);
  }


let kissInterval = null;

// Gift 3 click
giftBoxes[2].addEventListener("click", () => 
  {
    yesScreen.style.display = "none";

    if (heartInterval) 
      {
      clearInterval(heartInterval);
      heartInterval = null;
      }

    gift3Screen.style.display = "block";
    gift3Screen.classList.remove("fade-in");
    void gift3Screen.offsetWidth;
    gift3Screen.classList.add("fade-in");

    // Start romantic kiss rain
    kissInterval = setInterval(createKiss, 400);
  });

// Back from Gift 3
const backToYesFromGift3 = document.getElementById("backToYesFromGift3");

backToYesFromGift3.addEventListener("click", () => 
  {
    gift3Screen.style.display = "none";

    yesScreen.style.display = "block";

    yesScreen.classList.remove("fade-in");
    void yesScreen.offsetWidth;
    yesScreen.classList.add("fade-in");

    // Stop kisses
    if (kissInterval) {
      clearInterval(kissInterval);
      kissInterval = null;
    }

    // Restart hearts
    heartInterval = setInterval(createHeart, 250);
  });


const bgMusic = document.getElementById("bgMusic");

// Set volume (not too loud)
bgMusic.volume = 0.25; // 0.0 to 1.0 (25% volume)

// Try autoplay when page loads
window.addEventListener("load", () => 
  {
    playMusic();
  });

// Function to play music safely
function playMusic() 
{
  bgMusic.play().catch(() => 
    {
      // If browser blocks autoplay,
      // start on first user click
      document.body.addEventListener("click", () => 
        {
        bgMusic.play();
        }, { once: true });
    });
}

// When music ends, wait 5 seconds then replay
bgMusic.addEventListener("ended", () => 
  {
    setTimeout(() => 
      {
      bgMusic.play();
      }, 5000); // 5 second delay
  });

