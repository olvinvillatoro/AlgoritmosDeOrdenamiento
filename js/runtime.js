var lista = [];
var lista1 = [];
var t1, t2, t3, t4, tburbuja, tquicksort;
var sortedArray;




function Burbuja() {

    var n, i, k, aux;
    n = lista.length;
    //  console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }
    console.log(lista); // Mostramos, por consola, la lista ya ordenada

}


//quicksort

function quick_Sort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {

        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;

        for (var i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }
        return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
    }

}

function ordenar() {
    lista = [];
    for (let index = 0; index < document.getElementById('cantidad').value; index++) {
        lista[index] = Math.floor(Math.random() * 100);
        lista1[index] = Math.floor(Math.random() * 100);


    }
    t3 = performance.now();
    sortedArray = quick_Sort(lista);
    t4 = performance.now();

    t1 = performance.now();
    Burbuja(lista1);
    t2 = performance.now();

    tburbuja = t2 - t1;
    tquicksort = t4 - t3;
    var tiempos = [];
    tiempos[0] = tburbuja / 1000;
    tiempos[1] = tquicksort / 1000;
    graficar(tiempos);

}


/*console.log(sortedArray);
console.log(tburbuja + 'ms  ' + tquicksort + 'ms');
document.writeln('tiempo de ejecucion de con burbuja ' + tburbuja / 1000 + 's  ');
document.writeln('tiempo de ejecucion de con burbuja ' + tquicksort / 1000 + 's');*/

function graficar(datos) {


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {

        type: 'bar',


        data: {
            labels: [document.getElementById('cantidad').value, document.getElementById('cantidad').value],
            datasets: [{
                label: 'Tiempos de ejecucion',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                data: datos
            }]
        },

        options: {}
    });

    //pintar en arreglo vertical
    if (!container.hasChildNodes) {
        container.forEach(element => {
            list.removeChild(element);
        });
    }

}