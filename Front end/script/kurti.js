let getdataData = async () => {
  try {
    let res = await fetch("http://localhost:4700/men");

    let data = await res.json();
    // console.log("data",data);
    for (var i = 0; i < data.length; i++) {
      data_sort.push(data[i]);
    }

    appendData(data);
  } catch (err) {
    console.log(err);
  }
};
var data_sort = [];

getdataData();

let right = document.getElementById("right");

function appendData(data) {
  document.getElementById("right").innerHTML = null;
  data.forEach((element) => {
    let div = document.createElement("div");

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id","imgdiv")

    let img1 = document.createElement("img");
    img1.src = element.img1;

    img1.addEventListener("mouseenter", function () {
      img1.src = element.img2;
    });

    img1.addEventListener("mouseout", function () {
      img1.src = element.img1;
    });
    imgdiv.append(img1)

    let textdiv = document.createElement("div");

    let brandname = document.createElement("p4");
    brandname.innerText = element.brandname;

    let shortname = document.createElement("p");
    shortname.innerText = element.shortname;
    let color = document.createElement("p");
    color.innerText = element.color;

    let discountedprice = document.createElement("p1");
    discountedprice.innerText = `₹${element.discountedprice}`;

    let originalprice = document.createElement("p2");
    originalprice.innerText = ` ₹${element.originalprice}`;

    let discountpercent = document.createElement("p3");
    discountpercent.innerText = ` ${element.discountpercent}% OFF`;
    let rating = document.createElement("p");
    rating.innerText = element.rating;

    textdiv.append(brandname,shortname,color,discountedprice,originalprice,discountpercent,rating)
    div.append(imgdiv,textdiv);
    document.getElementById("right").append(div);

    div.onclick = () => {
      localStorage.setItem("onedata", JSON.stringify(element._id));
      window.location.href = "productpagekurti.html";
    };
  });
}

function Tsort() {
  var valT = document.querySelector("#sortT").value;
  if (valT == "") {
  } else if (valT == "high") {
    data_sort.sort(function (a, b) {
      return parseInt(b.discountedprice) - parseInt(a.discountedprice);
    });
  } else {
    data_sort.sort(function (a, b) {
      return parseInt(a.discountedprice) - parseInt(b.discountedprice);
    });
  }
  appendData(data_sort);
}

document.querySelector("#log").addEventListener("click",function(event){
  window.location="login.html"
})
document.querySelector("#sinup").addEventListener("click",function(event){
 window.location="Signup.html"
})
document.querySelector("#cart").addEventListener("click",function(event){
 window.location="cart.html"
})
