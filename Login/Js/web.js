
let p=document.getElementById("p")
let chk="chk"
let img=document.getElementById("img")
img.addEventListener("click",function(){

    let npwd=document.getElementById("npswd").value
    let cpswd=document.getElementById("cpswd").value;
   
    let get=document.getElementById("cpswd")
    if(chk=="chk" && npwd==cpswd){
        chk="no"
        p.textContent="Password Matched"
        p.style.marginLeft="80px"
        p.style.marginTop="5px"
        get.type="text"
    }
    else if(chk=="chk" && npwd!=cpswd)
    {
        chk="no"
        p.textContent="Password Not Matched"
        p.style.marginLeft="101px"
        p.style.marginTop="5px" 
        get.type="text"
        
    }
    else{
        chk="chk"
        p.style.display="none"
        get.type="password"
    }

})

let btt1=document.getElementById("btt")
btt1.addEventListener("click",function(){

})

console.log(document)
