const contenedor=document.querySelector(".contenedor");
const fragment=new DocumentFragment;
const button=document.querySelector(".button");
button.addEventListener("click",()=>{
    contenedor.innerHTML=""
    let cuadricula=prompt("cuanto por cuanto");
    if(cuadricula>100){
        alert("numeros menores a 100 pls")
        
    }else{
        cuadricula=cuadricula*cuadricula
        creardivs(cuadricula)
    }
   
})
let true1
function dibujar(){
    let divs1=document.querySelectorAll(".cuadricula")
    divs1.forEach((div)=>{
        div.addEventListener("mousedown",()=>{
            div.style.background="red"
            true1=true;
            
        })
      
        div.addEventListener("mousemove",()=>{
            if(true1){
                div.style.background="red"
            }
        })
        div.addEventListener("mouseup",()=>{
            true1=false
        })
    })
    
}
function creardivs(forbucle){
    for (let i = 1; i <= forbucle ;i++) {
        const divs=document.createElement("div");
        divs.classList.add("cuadricula")
        
        fragment.appendChild(divs);
        
        }
        contenedor.appendChild(fragment);
        dibujar()
}


creardivs(256)