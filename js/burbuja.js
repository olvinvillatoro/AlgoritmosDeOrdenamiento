var datos = [];
var backgroundColor = [];
var comparando;
var segundos;
var cantidad;
var container = document.getElementById('arreglo');




function ordenar() {
    document.getElementById('arreglo').innerHTML = ``;
    document.getElementById('myChart').innerHTML = ``;
    comparando = 'rgba(54, 162, 235, 0.2)';
    segundos = 2;
    cantidad = document.getElementById('cantidad').value;
    document.getElementById('listaAleatoria').innerHTML = ``;
    for (let i = 0; i < cantidad; i++) {
        datos[i] = Math.floor(Math.random() * 100);
        backgroundColor[i] = 'rgba(255, 99, 132, 0.2)';
        document.getElementById('listaAleatoria').innerHTML += `
       <div class="col colorAleatoria">${datos[i]}</div>
        `;

    }
 
    for (let i = 0; i < datos.length; i++) {
        var objeto = document.createElement("div");

        objeto.setAttribute('id', 'dato' + i);
        objeto.setAttribute('class', 'dato rounded');
        objeto.innerText = (datos[i]);
        container.appendChild(objeto);
    }
    bubble(datos);







}





function graficar(datos) {

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'bar',


        data: {
            labels: datos,
            datasets: [{
                label: 'Ordenamiento Burbuja',
                backgroundColor: backgroundColor,
                borderColor: 'rgb(255, 99, 132)',
                data: datos
            }]
        },
        options: {
            animation: {
                duration: 0
            },
            scales: {
                yAxes: [{
                    ticks: {
                        display: false //this will remove only the label
                    }
                }]
            }
        }
    });

    //pintar en arreglo vertical
    if (!container.hasChildNodes) {
        container.forEach(element => {
            list.removeChild(element);
        });
    }

}
async function bubble(datos) {
    var datosTemp;
    
    var colorTemp;
    graficar(datos);
    await timer(2*1000);
    for (let i = 1; i < datos.length; i++) {
        for (let j = 0; j < datos.length -i; j++) {

            backgroundColor[j] = comparando;
            backgroundColor[j + 1] = comparando;
            graficar(datos);
            animar(j, j + 1);
            await timer(2 * 1000);
            if (datos[j] > datos[j + 1]) {
                
                await timer(2 * 1000);
                trasladarYup(j);
                trasladarYdown(j+1);
                datosTemp = datos[j];
                datos[j] = datos[j + 1];
                datos[j + 1] = datosTemp;
                
                await timer(2 * 1000);
                
                
                
               
                 repintar(datos,j + 1, j + 2 );
                
             
            
                graficar(datos);
                await timer(2 * 1000);
            }
            else{
                graficar(datos);
               // animar(j, j + 1);
                await timer(2 * 1000);
            }

            backgroundColor[j] = 'rgba(255, 99, 132, 0.2)';


        }


    }
    document.getElementById('listaOrdenada').innerHTML = ``;
    for (let k = 0; k < datos.length; k++) {
        document.getElementById('listaOrdenada').innerHTML += `
           <div class="col colorOrdenada">${datos[k]}</div>
        `;

    }


    console.dir(datos);
}
//animar arreglo vertical

function animar(d, d1) {
    var d = ['#dato' + d, '#dato' + d1];
    anime({
        targets: d,
        translateX: 70,
        direction: 'alternate',
        left: '240px',
        backgroundColor: '#d1a52c',
        borderRadius: ['0%', '20%'],
        easing: 'easeInOutQuad'
    });
    
    


}

function trasladarYup(d){
    anime.remove('#dato'+d);
    anime({
        targets: '#dato'+d,
        translateY: 42
      });
    
    //  anime({
        
    //     targets: '#dato'+d,
    //    keyframes: [ 
    //          {translateX: 250},
    //         {translateY: 42},
    //         {translateX: 0}           
            
    //     ],
    //     duration: 3500,
    //     easing: 'easeInOutSine',
    //     loop: false
    //   });
}
function trasladarYdown(d){
    anime.remove('#dato'+d);
    anime({
        targets: '#dato'+d,
        translateY: -42
      });
    // anime({
 
        
    //     targets: '#dato'+d,
    //     keyframes: [ 
    //         {translateX: 250},
    //         {translateY:-42},
    //         {translateX: 0},           
            
    //     ],
    //     duration: 3500,
    //     easing: 'easeInOutSine',
    //     loop: false
          
    //   });
}

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

function repintar(datos, k, l) {
    document.getElementById('arreglo').innerHTML = ``;
    var cambiarNumero;
    for (let i = 0; i < datos.length; i++) {
        var objeto = document.createElement("div");

        objeto.setAttribute('id', 'dato' + i);
        objeto.setAttribute('class', 'dato rounded');
        objeto.innerText = (datos[i]);
        container.appendChild(objeto);
    }
}