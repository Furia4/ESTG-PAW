document.querySelector("div").addEventListener("click", function(e){
				var rndCol = 'rgb(' + Math.floor(1 + Math.random() * 255) + ',' + Math.floor(1 + Math.random() * 255) + ',' + Math.floor(1 + Math.random() * 255) + ')';
    				e.target.style.backgroundColor = rndCol;
}); 
