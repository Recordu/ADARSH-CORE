const boot = document.getElementById("boot");

const messages = [
  "INITIALIZING CORE...",
  "LOADING IDENTITY...",
  "VERIFYING SIGNAL...",
  "ENCRYPTED CHANNEL ACTIVE",
  "ACCESS GRANTED."
];

let messageIndex = 0;
let charIndex = 0;

function typeMessage() {

  if (messageIndex >= messages.length) {
    boot.textContent = "ACCESS GRANTED.";
    return;
  }

  const message = messages[messageIndex];

  if (charIndex <= message.length) {

    boot.textContent =
      message.substring(0, charIndex) + "_";

    charIndex++;

    setTimeout(typeMessage, 45);

  } else {

    charIndex = 0;
    messageIndex++;

    setTimeout(typeMessage, 650);
  }
}

typeMessage();


// Small terminal-style random signal effect

document.addEventListener("mousemove", () => {

  const heading =
    document.querySelector("h1");

  if (heading) {

    heading.style.textShadow =
      "0 0 28px rgba(0,229,255,.18)";
  }

});
