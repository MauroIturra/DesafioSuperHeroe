let b = document.getElementById("boton");

b.addEventListener("click", function(){

let img1 = document.getElementById("Heroe");
let ingreso = document.getElementById("entrada").value;



fetch("https://www.superheroapi.com/api.php/5097b85a9557dc7a49614f9d5575ca28/"+ingreso)
.then(r=>r.json())
.then(d => {

Heroe.setAttribute("src", d.image.url);
document.getElementById("texto").innerText ="Nombre: " + d.name;
document.getElementById("texto2").innerText ="Conexiones: " + d.connections["group-affiliation"];
document.getElementById("texto3").innerText = "Publicado por: " + d.biography.publisher;
document.getElementById("texto4").innerText ="Ocupacion: " + d.work.occupation;
document.getElementById("texto5").innerText = "Primera Aparicion: " + d.biography["first-appearance"];
document.getElementById("texto6").innerText ="Altura: " + d.appearance.height[1];
document.getElementById("texto7").innerText ="Peso: " + d.appearance.weight[1];
document.getElementById("texto8").innerText ="Alianzas: " + d.biography.aliases;

//Grafico JS

    var options = {
        title: {
            text: "Estadisticas de Poder para: " + d.name
            
        },
        data: [{
                type: "pie",
                startAngle: 45,
                showInLegend: "true",
                legendText: "{label}",
                indexLabel: "{label} ({y})",
                yValueFormatString:"#,##0.#"%"",
                dataPoints: [
                    { label: "Combate", y: d.powerstats.combat },
                    { label: "Durabilidad", y: d.powerstats.durability },
                    { label: "Inteligencia", y: d.powerstats.intelligence },
                    { label: "Poder", y: d.powerstats.power },
                    { label: "Velocidad", y: d.powerstats.speed },
                    { label: "Fuerza", y: d.powerstats.strength },
                    ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
    
    

console.log(d);       
            
})
    
})

