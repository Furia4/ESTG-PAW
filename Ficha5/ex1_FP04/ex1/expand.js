function openImg(imgs){
    'use strict';
    var expandImg = document.getElementById("expandedImg");
    
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}
