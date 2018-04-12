document.querySelector("div").addEventListener("click", function(e){
				'use strict';
				var rndCol = 'rgb(' + Math.floor(1 + Math.random() * 255) + ',' + Math.floor(1 + Math.random() * 255) + ',' + Math.floor(1 + Math.random() * 255) + ')';
    				e.target.style.backgroundColor = rndCol;
}); 
