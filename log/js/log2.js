
let chk="chk"
let val=document.getElementById("npswd")
function fun(){

    if(chk=="chk")
    {
        chk="no"
        let pwd=document.getElementById("npswd")
        pwd.type="text"
    }
    else{
        chk="chk"
        let pwd1=document.getElementById("npswd")
        pwd1.type="password"
    }
}

let btt=document.getElementById("btt")
btt.addEventListener("click",function(){

    let mail=document.getElementById("semail")
    let p=document.getElementById("p")

    if(mail=="")
    {
        p.style.display="block"
    }

})