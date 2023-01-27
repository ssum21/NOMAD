const title = document.querySelector("title");

const EventHandler = {
  handleResize_1: function () {
    if (window.innerWidth > 1000) {
      document.body.style.backgroundColor = "cornflowerblue";
    } else if (window.innerWidth <= 1000 && window.innerWidth >= 500) {
      document.body.style.backgroundColor = "gray";
    } else {
      document.body.style.backgroundColor = "tomato";
    }
  }
};

window.addEventListener("resize", EventHandler.handleResize_1);
