var datos = [];
var backgroundColor = [];
var comparando;
var segundos;
var cantidad;
var container = document.getElementById('arreglo');

function ordenar() {
  //document.getElementById('arreglo').innerHTML = ``;
  document.getElementById('quicksort').innerHTML = ``;
  comparando = 'rgba(252, 20, 20)';
  // segundos = document.getElementById('segundos').value;
  cantidad = document.getElementById('cantidad').value;
  //document.getElementById('listaAleatoria').innerHTML = ``;
  for (let i = 0; i < cantidad; i++) {
      datos[i] = Math.floor(Math.random() * 100);
      backgroundColor[i] = 'rgba(255, 99, 132, 0.2)';
          document.getElementById('listaAleatoria').innerHTML += `
       <div class="col colorAleatoria">${datos[i]}</div>
      `;

  }

 
  quickSort(datos, 0, datos.length - 1);

}


async function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    graficar(items);
    
    backgroundColor[leftIndex]=comparando;
    
    backgroundColor[rightIndex]=comparando;
    
    await timer(2*1000);
    
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    graficar(items);
    await timer(2*1000);


    

}
 function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
          graficar(items);
            
            i++;
         
        }
        while (items[j] > pivot) {
          graficar(items);
                    j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
         graficar(items);
    }
    return i;
}

async function quickSort(items, left, right) {
    var index;
  
    if (items.length > 1) {  
      
      
      
      index = partition(items, left, right); //index returned from partition
      backgroundColor[index+1]='rgba(255, 99, 132, 0.2)';
      backgroundColor[index]='rgba(255, 200, 132, 0.2)';;
      backgroundColor[index-1]='rgba(255, 99, 132, 0.2)';

      graficar(items);
      await timer(2*1000);
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

//funcion para graficar el arreglo y las comparaciones
function graficar(datos){
  var ctx = document.getElementById('quicksort').getContext('2d');
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
                        display: false //Remover los labels del eje Y
                    }
                }]
            }
        }


    });
}

//funcion para hacer timer
function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
}