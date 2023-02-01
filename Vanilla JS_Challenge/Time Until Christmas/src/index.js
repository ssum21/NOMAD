const clock = document.querySelector("h2#clock");

function getClock() {
  const today = new Date();
  const xmas = new Date("2023-12-25");
  const date = xmas - today;
  const days = Math.floor(date / (1000 * 60 * 60 * 24));
  const hours = Math.floor((date / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((date / (1000 * 60)) % 60);
  const seconds = Math.floor((date / 1000) % 60);
  clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
