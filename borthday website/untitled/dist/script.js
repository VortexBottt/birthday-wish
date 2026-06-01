function showSurprise() {
  document.getElementById("surpriseMessage").innerHTML =
    "Love you lots Divya Akka ❤️ Hope you have the happiest birthday.";

  const button = document.querySelector("button");

  const emojis = ["🎉", "🎂", "🎈", "✨", "💖", "🥳"];

  for (let i = 0; i < 18; i++) {
    const emoji = document.createElement("span");

    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.classList.add("burst");

    const rect = button.getBoundingClientRect();

    emoji.style.left = rect.left + rect.width / 2 + "px";
    emoji.style.top = rect.top + rect.height / 2 + "px";

    emoji.style.setProperty("--x", `${(Math.random() - 0.5) * 260}px`);
    emoji.style.setProperty("--y", `${-80 - Math.random() * 160}px`);

    document.body.appendChild(emoji);

    setTimeout(() => emoji.remove(), 1600);
  }

  launchConfetti();
}

function launchConfetti() {
  const colors = ["#ff4da6", "#ffd700", "#8a2be2", "#00bfff", "#ffffff"];

  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";

    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.animationDuration = 3 + Math.random() * 3 + "s";

    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 6000);
  }
}