function exuser() {
    window.location.href = "login.html"
}

function mblclick() {
    var inp1 = document.querySelector("#mbl").id = "afterinp"
}
function mblonip() {
    document.querySelector("#oninp").style.display = "block"
}
function continuebtn(event) {
    document.querySelector("#term").style.display = "none"
    document.querySelector("#cntbut").style.display = "none"
    document.querySelector("#cntbut1").style.display = "none"
    document.querySelector("#none11").style.display = "block"
    document.querySelector("#none12").style.display = "block"
    document.querySelector("#none13").style.display = "block"
    document.querySelector("#none14").style.display = "block"
    document.querySelector("#none15").style.display = "block"
}
function otpclick() {
    document.querySelector(".otpinp").id = "afterotp"
}
function pasclick() {
    document.querySelector(".passinp").id = "afterpass"
}


    let but=document.querySelector(".ctnbut2")
    but.addEventListener("click", async function(e){
    var p = document.querySelector(".passinp").value;
    var m = document.querySelector(".mblinp").value;
    var o = document.querySelector(".otpinp").value;
    if(m.length!=10 ){
        window.alert("Enter Valid Mobile Number")
        return;
    }else if(p.length<8){
        window.alert("Enter Valid Password")
        return;
    }else if(o.length==6){
        window.alert("Enter Valid OTP")
        return;
    }
        let data = { mbl: m, pass: p }
  
        const url = 'http://localhost:4700/register'

        const param = {
            method: 'Post',
            headers: {
                "content-type": "application/json;charset = UTF-8"
            },
            body: JSON.stringify(data)
        }
        const sendRequest = await fetch(url, param)
        const response = await sendRequest.json()
       if(!response.mbl){
           window.alert("User Already Exists")
           return 
       }
        window.alert("Signupp Success")
        window.location.href = "login.html"
  
})

var d = document.querySelector("#flipkart-logo")
d.addEventListener("click", function () {
    window.location.href = "index.html"
})