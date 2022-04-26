function newuser() {
    window.location.href = "Signup.html"
}
function mblclick() {
    var inp1 = document.querySelector("#mbl").id = "afterinp"
}
function pasclick() {
    document.querySelector(".passinp").id = "afterpass"
}

let but = document.querySelector(".ctnbut2")
but.addEventListener("click", async function (e) {
   
    var p = document.querySelector(".passinp").value;
    var m = document.querySelector(".mblinp").value;
    if(m.length!=10){
        window.alert("Please Enter Valid Mobile Number")
    }
    let getdataData = async () => {
        try {
            let res = await fetch(`http://localhost:4700/register?mbl=${m}`);

            let data = await res.json();
            if(data.mbl===m && data.pass===p){
                 window.alert("login  Success")
                  window.location.href = "index.html"
            }
            else{
                window.alert("wrong mobile Number or Password")
            }

            console.log(data);

         
        } catch (err) {
            console.log(err);
        }
    };
   
    getdataData();
})
var d = document.querySelector("#flipkart-logo")
d.addEventListener("click", function () {
    window.location.href = "index.html"
})