
let chk="chk"
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