let helthcare = JSON.parse(localStorage.getItem("categories"));
console.log(helthcare);
append(helthcare);

function append(data) {
  data.forEach(function (elem, index) {
    var div = document.createElement("div");
    div.setAttribute("id", "items");
    div.addEventListener("click", function () {
      openCat(elem);
    });
    // div.style.width="45%";
    // div.style.height="120px";

    var img = document.createElement("img");
    img.setAttribute("src", elem.image);

    var name = document.createElement("p");
    name.innerHTML = elem.name;
    name.style.marginLeft = "5px";

    var offer = document.createElement("h4");
    offer.style.color = "#16876E";
    offer.style.fontSize = "14px"
    offer.innerHTML = elem.offer;

    div.append(img, name, offer);
    document.getElementById("products").append(div);
  });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function openCat(elem) {
  // console.log(elem.href)
  window.location.href = elem.href;
}
