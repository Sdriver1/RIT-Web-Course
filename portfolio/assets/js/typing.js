document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name");
  const descriptionElement = document.getElementById("description");
  const aboutmeElement = document.getElementById("aboutme");
  const name = "Steven Driver";
  const description = "Welcome to my portfolio!";
  const aboutme =
    "Hello, My name is Steven Driver. I am 16 years old Male from NY, USA. I am a rising senior at Archbishop Stepinac. I am interested in baseball, swimming, and coding. I work in JavaScript, Typescript, Html & CSS, and Java. I work as a lifeguard for Westchester County Parks.";
  let index = 0;

  function typeEffect(text, element, callback, speed = 100) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeEffect(text, element, callback, speed), speed);
    } else {
      if (callback) {
        callback();
      }
    }
  }

  function fadeInText(element, text) {
    element.innerHTML = text;
    element.style.opacity = "1";
  }

  function startTyping() {
    index = 0;
    typeEffect(name, nameElement, () => {
      index = 0;
      descriptionElement.style.opacity = "1";
      typeEffect(description, descriptionElement, () => {
        index = 0;
        aboutmeElement.style.opacity = "1";
        typeEffect(
          aboutme,
          aboutmeElement,
          () => {
            document.getElementById("buttons").classList.add("fadeInLong");
          },
          50
        );
      });
    });
  }

  function init() {
    const viewed = localStorage.getItem("viewed");
    if (viewed === "yes") {
      fadeInText(nameElement, name);
      fadeInText(descriptionElement, description);
      fadeInText(aboutmeElement, aboutme);
      document.getElementById("buttons").classList.add("fadeInLong");
    } else {
      startTyping();
      localStorage.setItem("viewed", "yes");
    }
  }

  init();
});
