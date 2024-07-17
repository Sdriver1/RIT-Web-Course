document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name");
  const descriptionElement = document.getElementById("description");
  const name = "Steven Driver";
  const description =
    "Welcome to my portfolio!";
  let index = 0;

  function typeEffect(text, element, callback) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeEffect(text, element, callback), 100);
    } else {
      if (callback) {
        callback();
      }
    }
  }

  function startTyping() {
    index = 0;
    typeEffect(name, nameElement, () => {
      index = 0;
      descriptionElement.style.opacity = "1";
      typeEffect(description, descriptionElement, () => {
        document.getElementById("buttons").classList.add("fadeInLong");
      });
    });
  }

  startTyping();
});
