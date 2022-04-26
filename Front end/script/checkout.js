var price=JSON.parse(localStorage.getItem("price"))
document.querySelector("#a1").textContent="₹" + " " +price
document.querySelector("#a4").textContent="₹" + " " +price

function c1(){
document.querySelector("#leftcart14").style.display="none"
document.querySelector("#leftcart22").style.display="grid"
document.querySelector("#b1").style.display="flex"
document.querySelector("#leftcart11").id="changetop"

}

function c2(){
document.querySelector("#leftcart22").style.display="none"
document.querySelector("#b1").style.display="none"
document.querySelector("#leftcart32").style.display="grid"
document.querySelector("#b2").style.display="flex"
document.querySelector("#leftcart21").id="changetop"
}

function c3(){
document.querySelector("#leftcart32").style.display="none"
document.querySelector("#b2").style.display="none"
document.querySelector("#leftcart42").style.display="grid"
document.querySelector("#b3").style.display="flex"
document.querySelector("#leftcart31").id="changetop"
}

function c4(){
document.querySelector("#leftcart42").style.display="none"
document.querySelector("#b3").style.display="none"
document.querySelector("#leftcart41").id="changetop"
alert("order Placed")
window.location.href="index.html"
}

displaydata()
function displaydata() {
  var res = JSON.parse(localStorage.getItem("cart"));
  // res=res.slice(1)
  console.log(res);
  
  res.map(function (data, hn) {
    var div = document.createElement("div");
    div.id = "box1";

    var imgdiv = document.createElement("div");
    imgdiv.id = "box11";

    var image = document.createElement("img");
    image.setAttribute("src", data.img1);

    var textdiv = document.createElement("div");
    textdiv.id = "box12";

    var productName = document.createElement("div");
    productName.id = "productName";
    productName.textContent = data.longname;

    var cartline = document.createElement("div");
    cartline.id = "cartline";

    var seller = document.createElement("div");
    seller.textContent = "FlipKart";

    var replacee = document.createElement("div");
    replacee.textContent = "7 Days Replacement Policy";

    var cartline1 = document.createElement("div");
    cartline1.id = "cartline1";

    let a = +data.discountedprice;
    let b = +data.originalprice;


    let c = Math.floor(((b - a) / b) * 100);

    a4 = a4 + a;

    var price = document.createElement("div");
    price.id = "price";
    price.textContent = "₹" + data.discountedprice;

    a1 = a1 + b;
    var price2 = document.createElement("div");
    price2.id = "price2";
    price2.textContent = "₹" + data.originalprice;

    var price3 = document.createElement("div");
    price3.id = "price3";
    price3.textContent = data.discountpercent + " %" + "    off";

    var assuer = document.createElement("img");
    assuer.src = "https://www.adgully.com/img/800/68264_fl.png.jpg";
    assuer.id = "flipass";


    cartline.append(seller, replacee);
    cartline1.append(price, price2, price3);
    imgdiv.append(image);
    textdiv.append(productName, cartline, cartline1, assuer);
    div.append(imgdiv, textdiv);
    document.querySelector("#leftcart32").append(div);
  });
}
function toindex(){
  window.location.href="index.html"
}