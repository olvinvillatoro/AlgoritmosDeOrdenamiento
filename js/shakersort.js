"use strict";

var datos = [];
var backgroundColor = [];
var comparando;
var segundos;
var cantidad;
var container = document.getElementById('arreglo');
var t0;



var t1;




function ordenar() {
    //document.getElementById('arreglo').innerHTML = ``;
    document.getElementById('shaker').innerHTML = ``;
    comparando = 'rgba(252, 20, 20)';
    segundos = document.getElementById('segundos').value;
    cantidad = document.getElementById('cantidad').value;
    //document.getElementById('listaAleatoria').innerHTML = ``;
    for (let i = 0; i < cantidad; i++) {
        datos[i] = Math.floor(Math.random() * 100);
        backgroundColor[i] = 'rgba(255, 99, 132, 0.2)';
            document.getElementById('listaAleatoria').innerHTML += `
         <div class="col colorAleatoria">${datos[i]}</div>
        `;

    }

   


}



async function shaker(arr) {
    let ordenando = true;
    graficar(arr);
    await timer(2 * 1000);
    while (ordenando) {


        for (let i = 0; i < arr.length - 1; i++) {
            backgroundColor[i] = 'rgba(20, 248, 252)';
            //backgroundColor[i+1] =  'rgba(20, 248, 252)';
            graficar(arr);
            await timer(0.1 * 1000);
            if (arr[i] > arr[i + 1]) {


                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                ordenando = true;

                console.log(arr);

            }
            backgroundColor[i] = 'rgba(255, 99, 132, 0.2)';
        }

        if (!ordenando)
            break;

        ordenando = false;

        for (let j = arr.length - 1; j > 0; j--) {

            //backgroundColor[j-1]=comparando;
            backgroundColor[j] = comparando;
            graficar(arr);

            await timer(0.1 * 1000);
            if (arr[j - 1] > arr[j]) {


                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                ordenando = true;

                console.log(arr);
            }

            backgroundColor[j] = 'rgba(255, 99, 132, 0.2)';
        }

    }
    console.log(arr);

}


//graficar con chartjs el arreglo

function graficar(datos) {

    var ctx = document.getElementById('shaker').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'bar',
        easing: '',
        gridLines: {
            display: false,
        },

        data: {
            labels: datos,
            datasets: [{
                label: 'Ordenamiento Shaker',
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
                        display: false  //Remover los labels del eje Y
                    }
                }]
            }
        }


    });

    // //pintar en arreglo vertical
    // if (!container.hasChildNodes) {
    //     container.forEach(element => {
    //         list.removeChild(element);
    //     });
    // }

}



function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}