const images = [
    { name: ``, desc: `` },
    { name: ``, desc: `` },
    { name: ``, desc: `` },
    { name: ``, desc: `` },
  ];
  
  const imgpath = `assets/images/`;
  let imgStr = ``;
  
  images.forEach((image) => {
    imgStr += `<img src="${imgpath}${image.name}thumb.jpg"
     class="thumb"
     id="${image.name}"
     alt="${image.desc}"
     title="${image.desc}">`;
  });
  
  document.querySelector(`#strip-div-container`).innerHTML = imgStr;
  
  document.querySelectorAll(`.thumb`).forEach(function (thumb) {
    thumb.addEventListener(`click`, function () {
      console.log("clicked");
      console.log(this);
      console.dir(this);
  
      showImage(this);
    });
  });
  
  function showImage(thumb) {
    const BigPic = document.querySelector(`#big-pic`);
    BigPic.src = `${imgpath}${thumb.id}.jpg`;
    BigPic.alt = thumb.alt;
    BigPic.title = thumb.title;
  
    document.querySelector(`#caption`).innerHTML = thumb.title;
  }
  
  images.forEach((image) => {
    const newImg = new Image();
    newImg.src = `${imgpath}${image.name}.jpg`;
  });
  