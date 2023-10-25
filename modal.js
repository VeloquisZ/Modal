let but = document.getSelection(".test")
const date = new Date().toLocaleDateString();
const date2 = new Date().toLocaleTimeString();
let saidaTime = document.getElementById("time")
let saida = document.getElementById("saida")

//---------------------
function escurecer(){
    const style = `
    background-color: rgb(0, 0, 0);
    opacity:0.1;
    background-color: transparent; 
    `
    const element = document.querySelector(".background")
    element.style.cssText = style;
}
function clarear(){
    const style = `
    
    `
    const element = document.querySelector(".background");
    
    element.style.cssText = style;
}


function bnt_X(){
    const style = `
  
    cursor: pointer;
    height: 20px;
    float: right;
    margin-right: 5px;
    display: block;
    display: flex;
    justify-content: center;
`
const element = document.querySelector("#feicha");
element.style.cssText = style;

}

function feichar(){
const style = `
display: none;
`
const element = document.querySelector(".expor");

element.style.cssText = style;
clarear()
 

}
 

function Temperatura(){
   const style = ` 
   width: 640px;
    height: 360px;
    color: rgb(0, 0, 0);
    background-color: #F4F4F4;
    border-radius: 5px;
    box-shadow: 7px 7px 7px 0 rgba(50, 50, 50, 0.22);
    padding: 20px;
    margin-top: 70px;
    transition: all 0.3s ease-out;
    border-left: 5px solid #cc304a;
    position: absolute;`

    const element = document.querySelector(".expor");

    element.style.cssText = style;

    saida.innerHTML = `Temperatura: Não sei, mas aqui mas no nordeste ta um inferno`

    bnt_X();
    escurecer();
}

function Ph(){
    const style = ` 
    width: 320px;
     height: 180px;
     color: rgb(0, 0, 0);
     background-color: #F4F4F4;
     border-radius: 5px;
     box-shadow: 7px 7px 7px 0 rgba(50, 50, 50, 0.22);
     padding: 20px;
     margin: 20px;
     transition: all 0.3s ease-out;
     border-left: 5px solid #cc304a;`
 
     const element = document.querySelector(".expor");
 
     element.style.cssText = style;
 
     saida.innerHTML = `PH: Paraná Hipopotamo`
  
     
 }

 function Turbidez(){
    const style = ` 
    width: 320px;
     height: 180px;
     color: rgb(0, 0, 0);
     background-color: #F4F4F4;
     border-radius: 5px;
     box-shadow: 7px 7px 7px 0 rgba(50, 50, 50, 0.22);
     padding: 20px;
     margin: 20px;
     transition: all 0.3s ease-out;
     border-left: 5px solid #cc304a;`
 
     const element = document.querySelector(".expor");
 
     element.style.cssText = style;
 
     saida.innerHTML = `Turbidez: Ta bem clarinha`
  
     
 }

 function Nivel(){
    const style = ` 
    width: 320px;
     height: 180px;
     color: rgb(0, 0, 0);
     background-color: #F4F4F4;
     border-radius: 5px;
     box-shadow: 7px 7px 7px 0 rgba(50, 50, 50, 0.22);
     padding: 20px;
     margin: 20px;
     transition: all 0.3s ease-out;
     border-left: 5px solid #cc304a;`
 
     const element = document.querySelector(".expor");
 
     element.style.cssText = style;
 
     saida.innerHTML = `Nível d'Água: Maior que de uma poça menor que a da Fossa das Marianas`
  
     
 }


   saidaTime.innerHTML = `Horário e data de medição: <br><br>
   ${date}, ${date2}`;
  
  /*setTimeout(()=>{
         Limpar()
     },5000)*/ 
  
  
