function h1Touppercase() {
    var h1Element=document.querySelector("h1");
    if(h1Element){
        h1Element.textContent=h1Element.textContent.toUpperCase();
    }
    
}
document.addEventListener('DOMContentLoaded', h1Touppercase);