var datos = [5,82,15,83,92,100,32,63,44,55];
var backgroundColor = [];
var comparando;
var segundos;
var cantidad;
var container = document.getElementById('arreglo');
//pintando todo en la pagina

    comparando = 'rgba(54, 162, 235, 0.2)';
    segundos = 3// document.getElementById('segundos').value;
    cantidad = 10//document.getElementById('cantidad').value;
    document.getElementById('listaAleatoria').innerHTML = ``;
    for (let i = 0; i < cantidad; i++) {
        datos[i] = Math.floor(Math.random() * 100);
        backgroundColor[i] = 'rgba(255, 99, 132, 0.2)';
        document.getElementById('listaAleatoria').innerHTML += `
       <div class="col colorAleatoria">${datos[i]}</div>
        `;

    }
 
    // for (let i = 0; i < datos.length; i++) {
    //     var objeto = document.createElement("div");

    //     objeto.setAttribute('id', 'dato' + i);
    //     objeto.setAttribute('class', 'dato rounded');
    //     objeto.innerText = (datos[i]);
    //     container.appendChild(objeto);
    // }

// InsertionSort to be used within bucket sort
function insertionSort(array) {
    var length = array.length;
    var cubet;
    for(var i = 1; i < length; i++) {
      var temp = array[i];
        for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j+1] = array[j];
            console.log(array);
        }
     
      array[j+1] = temp;
      
    }
    
    return array;
  }
  
  // Implement bucket sort
  async function bucketSort(array, bucketSize) {
    if (array.length === 0) {
      return array;
    }
  
    // Declaring vars
    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;
    
    // Setting min and max values
    array.forEach( (currentVal) => {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })
  
    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);

    //<pintar cubetas
    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
      var objeto = document.createElement("div");

      objeto.setAttribute('id', 'dato' + i);
      objeto.setAttribute('class', 'dato rounded');
      objeto.innerText = i;
      container.appendChild(objeto);
      await timer(1 * 1000);
    }
    //pintar cubetas />
    
    // Pushing values to buckets
 
    array.forEach( (currentVal) => {
      
      var j =(Math.floor((currentVal - minValue) / bucketSize));
      var flecha=document.createElement('div');
      var p = document.createElement('div');
      p.setAttribute('class','cubeta');
      p.setAttribute('id','cubeta'+j);
      // await timer(2*1000);
      flecha.setAttribute('class','arrow-down');
        allBuckets[j].push(currentVal);
        console.log('asdd'+currentVal);
        var cubeta= document.getElementById('dato'+j);
      p.innerText=currentVal;
      cubeta.append(flecha);  
      cubeta.append(p);
      // await timer(2*1000);
        
  
      
    });
   
  
    // ordenar buckets
    array.length = 0;
    allBuckets.forEach( function(bucket) {
        insertionSort(bucket);
        bucket.forEach( function (element) {
            array.push(element);
    

        });
        cont=0;
        console.log(bucket);
       // document.getElementById('cubeta'+cont).innerText = 'asd.876';

       
        
    });
    console.log('pintando ordenado');
  
    repintar(array);
    return array;
  }
  
  function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}
async function repintar(array){
  await timer(3*1000);
  console.log('pintando ordenado1');
  console.log(array);

  document.getElementById('listaOrdenada').innerHTML = ``;
for (let k = 0; k < array.length; k++) {
    document.getElementById('listaOrdenada').innerHTML += `
       <div class="col colorOrdenada">${array[k]}</div>
    `;

}

}
bucketSort(datos, 10);

