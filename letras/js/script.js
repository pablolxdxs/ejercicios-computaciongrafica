var debug = "";
window.onload = function()
{
	//alert("Hola");
	var color = "#0f6";
	var dibujar = SVG('divsvg').size("100%", 400);
	var image = dibujar.image('estudia.gif');
    image.size("100%", "100%");
    image.hide();


	var letraP = [[0,0], [0, 200],[20,200], [20, 0],[190,0],[190,100],[20,100],[20,0],[0,0],[0,90],  [0, 0]];
    var letraS = [[0,0],  [190,0],[190,20],[0,20],[0,0],[0,110],[20,110],[20,0],[0, 0], [0, 110], [20, 110], [20, 110], [160, 110], [160, 200],[10,200],
                 [10, 180], [160, 180], [160, 200],[180, 200],[180, 90], [20, 90], [20, 0], [0, 0]]; 
	var continua = dibujar.polyline(letraP).fill("none").stroke({width : 2, color: '#fd3'}).attr({ fill: color });
	continua.animate(1000).plot(letraS).loop();

	for(var i = 1; i <= 5; i++)
	{
		nom_div("opcion_" + i).addEventListener('change', function(event)
		{
			//console.debug(event);
			var ind = event.target.id.split("_");
			switch(Number(ind[1]))
			{
				case 1: continua.attr({fill: this.value}); break;
				case 2: continua.stroke({color : this.value}); break;
				case 3: continua.stroke({width : this.value}); break;
				case 4: continua.attr({opacity: this.value}); break;
				case 5: continua.scale(this.value); break;
				
			}
		});
	}

	var animo = true;
	nom_div("controla").addEventListener('click', function(event)
	{
		if(animo)
		{
			this.value = "Continuar";
			continua.pause();
		}
		else
		{
			this.value = "Detener";
			continua.play();
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}