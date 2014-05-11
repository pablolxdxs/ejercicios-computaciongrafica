window.onload = function()
{
    inicio();
}

function inicio()
{
    /*
    Tamaño/tomaño del sol = %
    */
    function movimiento(path, obj, vel)
    {
        //console.log("Vel de: "  + obj + " es: " + vel);
        var pathLength = path.getTotalLength();
        var tween = new TWEEN.Tween({ length: 0  })
        .to({ length: pathLength }, vel)
        .onUpdate(function()
        {
            var point = path.getPointAtLength(this.length);
            obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
        }).repeat(999999999).start();
        animate = function()
        {
            requestAnimationFrame(animate)
            TWEEN.update()
        }
        animate();
    }
    var tamReal = false;
    var creaPlanetas = function(objeto, luna)
    {
        var tamanoluna = luna.tamano;
      
        if(tamReal)
        {
            tamanoluna = Math.round(jupiter.tamano * (luna.porcentaje / 100));
           
        }
        objeto.style.width = tamanoluna + "px";
        objeto.style.height = tamanoluna + "px";
        objeto.style.backgroundImage = "url('lunas/"+luna.imagen+"')";
        objeto.style.backgroundSize = tamanoluna + "px " + tamanoluna + "px";
        var margen = (Math.round(tamanoluna / 2)) * -1;
        objeto.style.marginTop = margen + "px";
        objeto.style.marginLeft = margen + "px";
        objeto.style.borderRadius = "50%";
        objeto.style.position = "absolute";
       
    }
    var lunas = [
                {nombre: "europa", 
                 imagen: "europa.png",
                 porcentaje: 0.671,
                 tamano: 22
                },
                {nombre: "lo", 
                 imagen: "lo.png",
                 porcentaje: 0.421,
                 tamano: 19 
                },
                {nombre: "Ganimedes", 
                 imagen: "Ganimedes.png",
                 porcentaje: 0.1070,
                 tamano: 13 
                },
                {nombre: "Callisto", 
                 imagen: "Callisto.png",
                 porcentaje: 0.1883,
                 tamano: 14
                }];
    var objSol = nom_div('svg_2');
    var jupiter = {
        tamano: objSol.height.baseVal.value, 
        x : objSol.x.baseVal.value, 
        y : objSol.y.baseVal.value
    };
    var objeto = "";
    var ruta = "";
    var velInicia = 3000;
    for(var i = 1; i <= lunas.length; i++)
    {
        objeto = nom_div("objeto_" + i);
        ruta = nom_div("ruta_" + i);
        creaPlanetas(objeto, lunas[i - 1]);
        movimiento(ruta, objeto, velInicia);
        velInicia += 4000;
    }
    console.log("Hola mundo");
    function nom_div(div)
    {
        return document.getElementById(div);
    }
}