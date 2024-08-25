function h1Touppercase() {
    var h1Element=document.querySelector("h1");
    if(h1Element){
        h1Element.textContent=h1Element.textContent.toUpperCase();
    }
    
}
document.addEventListener('DOMContentLoaded', h1Touppercase);
//background Color change

function changeBackGroundColor(color){

    document.body.style.backgroundColor=color;

}
function setupButton(){

    var button=document.getElementById('colorButton');
    if(button){
     
        button.addEventListener('click', function(){
            changeBackGroundColor('lightblue');
        });

      
        button.addEventListener('dblclick',function(){
                changeBackGroundColor('white');
    
       });
      

    }
  
}
document.addEventListener('DOMContentLoaded', setupButton);