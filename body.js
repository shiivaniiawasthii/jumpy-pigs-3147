
        



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



brands = [
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/d5f9240e29a-SUGARFREE.png?dim=146x0&dpr=1&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/fd17e547883-Horlicks_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/a2ec4d896ba-Web_Featured-Vicks.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/2d987111a15-Featured-banner_Revital.png?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/ac01791d842-Featured-banner_Volini.png?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/487644e2f83-Nivea_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/fdcad76ed48-WEB_Bournvita.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/3eafcdf840c-Upkarma.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/43468a266c9-Sri-Sri-Tattva_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/d0aebf22ad7-Featured-banner_Sebamed.png?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/129ec4c36d5-Mcaffeine_1.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/0845572266f-Everherb.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/a135764fb94-Kapiva_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/73f9dfbac01-Teddy.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/326d31cf4d3-Nycil_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/f8493a13be2-web_Pigeon.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/fffbe044dc3-web_Baidynath.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/fd17e547883-Horlicks_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/a2ec4d896ba-Web_Featured-Vicks.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/2d987111a15-Featured-banner_Revital.png?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/ac01791d842-Featured-banner_Volini.png?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/487644e2f83-Nivea_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/fdcad76ed48-WEB_Bournvita.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/3eafcdf840c-Upkarma.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/43468a266c9-Sri-Sri-Tattva_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/d0aebf22ad7-Featured-banner_Sebamed.png?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/129ec4c36d5-Mcaffeine_1.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/0845572266f-Everherb.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/a135764fb94-Kapiva_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/73f9dfbac01-Teddy.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/326d31cf4d3-Nycil_web.jpg?dim=146x0&dpr=1.25&q=100",
  },
  {
    image:
      "https://cms-contents.pharmeasy.in/carousel_item/f8493a13be2-web_Pigeon.jpg?dim=146x0&dpr=1.25&q=100",
  },
];

console.log(brands);
append(brands);

function append(data) {
  data.forEach(function (elem, index) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", elem.image);
    img.style.width = "150px";
    img.setAttribute("id", "feature_brand_images");

    // console.log(elem.image);
    // div.append(img);
    document.querySelector(".featurebrands2").append(img);
  });
}

const featurebrands2 = [...document.querySelectorAll(".featurebrands2")];
const nxtBtn1 = [...document.querySelectorAll(".nxt-btn1")];
const preBtn1 = [...document.querySelectorAll(".pre-btn1")];

featurebrands2.forEach((item, i) => {
  let containerDimensions1 = item.getBoundingClientRect();
  let containerWidth1 = containerDimensions1.width;

  nxtBtn1[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth1;
  });

  preBtn1[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth1;
  });
});

