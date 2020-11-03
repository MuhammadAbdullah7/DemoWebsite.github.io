
// Necha Up Button Ka Ha
const toTop = document.querySelector("#up1");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

var nav = document.getElementById('nav');
window.onscroll = function(){
    if(window.pageYOffset>10){
        this.nav.style.background = "rgba(68, 65, 65, 0.95)";
        this.nav.style.top = "0";
    }
    else{
        nav.style.background = "transparent";
        this.nav.style.top = "-5px";
    }
}

br1 = document.getElementById("btn1");
br2 = document.getElementById("btn2");
br3 = document.getElementById("btn3");
document.getElementById("btn1").addEventListener("click",function()
{
    var pod1 = document.getElementById("r1");
    var pod2 = document.getElementById("r2");
    var pod3 = document.getElementById("r3");
    if(pod2.style.display=="flex" || pod3.style.display=="flex"){
        pod2.style.display="none";
        pod3.style.display="none";
        pod1.style.display="flex";
        br1.style.background = "rgba(169, 253, 42, 0.514)";
        br2.style.background = "transparent";
        br3.style.background = "transparent";
    }
    else
    {
        pod3.style.display="none";
        pod1.style.display="flex";
        br1.style.background = "rgba(169, 253, 42, 0.514)";
        br2.style.background = "transparent";
        br3.style.background = "transparent";
    }
})

document.getElementById("btn2").addEventListener("click",function()
{
    var pod1 = document.getElementById("r1");
    var pod2 = document.getElementById("r2");
    var pod3 = document.getElementById("r3");
    if(pod1.style.display=="flex" || pod3.style.display=="flex"){
        pod1.style.display="none";
        pod3.style.display="none";
        pod2.style.display="flex";
        br2.style.background = "rgba(169, 253, 42, 0.514)";
        br1.style.background = "transparent";
        br3.style.background = "transparent";
    }
    else
    {
        pod3.style.display="none";
        pod2.style.display="flex";
        br2.style.background = "rgba(169, 253, 42, 0.514)";
        br1.style.background = "transparent";
        br3.style.background = "transparent";
    }
})

document.getElementById("btn3").addEventListener("click",function()
{
    var pod1 = document.getElementById("r1");
    var pod2 = document.getElementById("r2");
    var pod3 = document.getElementById("r3");
    if(pod1.style.display=="flex" || pod2.style.display=="flex"){
        pod1.style.display="none";
        pod2.style.display="none";
        pod3.style.display="flex";
        br3.style.background = "rgba(169, 253, 42, 0.514)";
        br2.style.background = "transparent";
        br1.style.background = "transparent";
    }
    else
    {
        pod3.style.display="flex";
        br3.style.background = "rgba(169, 253, 42, 0.514)";
        br2.style.background = "transparent";
        br1.style.background = "transparent";
    }
})
