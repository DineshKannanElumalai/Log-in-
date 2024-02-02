let p=document.getElementById("p")
let chk="chk"
let img=document.getElementById("img")
img.addEventListener("click",function(){

    let npwd=document.getElementById("npwd").value
    let cpswd=document.getElementById("cpwd").value;
   
    let get=document.getElementById("cpwd")
    if(chk=="chk" && npwd==cpswd){
        chk="no"
        p.style.display="block"
        p.style.marginLeft="50px"
        p.textContent="Password Matched"
        
        get.type="text"
    }
    else if(chk=="chk" && npwd!=cpswd)
    {
        chk="no"
        p.style.display="block"
        p.textContent="Password Not Matched" 
        p.style.marginLeft="80px"
        get.type="text"
        
    }
    
    else{
        chk="chk"
        p.style.display="none"
        get.type="password"
    }

})

let btt=document.getElementById("btt1")
btt.addEventListener("click",function(){
    
    let npwd1=document.getElementById("sname").value
    let cpswd1=document.getElementById("email").value;

    if(chk=="chk" && npwd1=="" && cpswd1=="")
    {
        chk="no"
        let f1=document.getElementById("field1")
        f1.style.display="block"
        let f2=document.getElementById("field2")
        f2.style.display="block"
    }
    else{
        chk="chk"
        let f3=document.getElementById("field1")
        f3.style.display="none"
        let f4=document.getElementById("field2")
        f4.style.display="none"
        
    }
    
})