var id = JSON.parse(localStorage.getItem("onedata"));

var data1 = [];
// let id = "624558f03710d2cc01a0a1fb";

let getdataData = async () => {
  try {
    let res = await fetch(`http://localhost:4700/women/${id}`);
    let data = await res.json();
    console.log(data);
    data1.push(data);
    renderProducts(data);
  } catch (err) {
    console.log(err);
  }
};
getdataData();

function renderProducts(data) {
  let imgss = document.querySelector(".imgsw");

  let image = document.createElement("img");
  image.src = data.img1;

  let imgs1 = document.querySelector(".imgsw1");

  imgs1.addEventListener("mouseenter", function () {
    image.src = data.img2;
  });

  imgs1.addEventListener("mouseout", function () {
    image.src = data.img1;
  });

  let imgs11 = document.createElement("img");
  imgs11.src = data.img2;

  let imgs2 = document.querySelector(".imgsw2");
  imgs2.addEventListener("mouseenter", function () {
    image.src = data.img3;
  });

  imgs2.addEventListener("mouseout", function () {
    image.src = data.img1;
  });

  let imgs22 = document.createElement("img");
  imgs22.src = data.img3;

  let imgs3 = document.querySelector(".imgsw3");
  imgs3.addEventListener("mouseenter", function () {
    image.src = data.img4;
  });

  imgs3.addEventListener("mouseout", function () {
    image.src = data.img1;
  });

  let imgs33 = document.createElement("img");
  imgs33.src = data.img4;

  let imgs4 = document.querySelector(".imgsw4");
  imgs4.addEventListener("mouseenter", function () {
    image.src = data.img5;
  });

  imgs4.addEventListener("mouseout", function () {
    image.src = data.img1;
  });

  let imgs44 = document.createElement("img");
  imgs44.src = data.img5;

  let brandname = document.querySelector(".brandnames");
  let p2 = document.createElement("p");
  p2.textContent = data.brandname;

  let prodname = document.querySelector(".prodname");
  let p1 = document.createElement("p");
  p1.textContent = data.longname;

  let swprice = document.querySelector(".swprice");
  let div1 = document.createElement("div");
  let crtprice = document.createElement("p");
  crtprice.textContent = "₹" + " " + data.discountedprice;
  crtprice.setAttribute("class", "crtprice");

  let div2 = document.createElement("div");
  let orgprice = document.createElement("p");
  orgprice.textContent = "₹" + data.originalprice;
  orgprice.setAttribute("class", "orgprice");

  let div3 = document.createElement("div");
  let discount = document.createElement("p");
  discount.textContent = data.discountpercent + "% off";
  discount.setAttribute("class", "discount");

  let rating = document.querySelector(".rating");
  let div4 = document.createElement("div");
  let swrating = document.createElement("p");
  swrating.textContent = data.rating + " " + "★";
  swrating.setAttribute("class", "rating");

  imgss.append(image);
  imgs1.append(imgs11);
  imgs2.append(imgs22);
  imgs3.append(imgs33);
  imgs4.append(imgs44);
  // img1.append(prodCard);
  swprice.append(crtprice, orgprice, discount);

  rating.append(swrating);
  brandname.append(p2);

  prodname.append(p1);
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart() {
  console.log("data[0]", data1[0]);
  cart.push(data1[0]);
  localStorage.setItem("cart", JSON.stringify(cart));
  data1 = [];
  alert("Item Added to Cart");
}
var a = document.querySelector("#more");
a.addEventListener("click", function () {
  window.location.href = "Signup.html";
});
var b = document.querySelector("#log");
b.addEventListener("click", function () {
  window.location.href = "login.html";
});

var c = document.querySelector("#cart");
c.addEventListener("click", function () {
  window.location.href = "cart.html";
});
var d = document.querySelector("#flipkart-logo");
d.addEventListener("click", function () {
  window.location.href = "index.html";
});
