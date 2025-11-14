function bla (){
    console.log("ola mundooo")
}

b=document.querySelector("button:nth-child(5)");

b.innerHTML= "Clique em mim"
b.addEventListener("click",bla)