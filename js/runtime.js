var lista=[];
var lista1=[];
var lista2=[];
var t1,t2,t3,t4, tburbuja, tquicksort;
var sortedArray ;
var randomNumber;


for (let index = 0; index < 50000; index++) {
    randomNumber=Math.floor(Math.random() * 100);
    lista[index]=randomNumber;
    lista1[index]=randomNumber;
    lista2[index]=randomNumber;

    
}
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




// InsertionSort to be used within bucket sort
function insertionSort(array) {
    var length = array.length;
    
    for(var i = 1; i < length; i++) {
      var temp = array[i];
      for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }
  
  // Implement bucket sort
  function bucketSort(array, bucketSize) {
    if (array.length === 0) {
      return array;
    }
  
    // Declaring vars
    var i,
        minValue = array[0],
        maxValue = array[0],
        bucketSize = bucketSize || 5;
    
    // Setting min and max values
    array.forEach(function (currentVal) {
        if (currentVal < minValue) {
            minValue = currentVal;
        } else if (currentVal > maxValue) {
            maxValue = currentVal;
        }
    })
  
    // Initializing buckets
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var allBuckets = new Array(bucketCount);
    
    for (i = 0; i < allBuckets.length; i++) {
      allBuckets[i] = [];
    }
    
    // Pushing values to buckets
    array.forEach(function (currentVal) {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });
  
    // Sorting buckets
    array.length = 0;
    
    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function (element) {
            array.push(element)
        });
    });
  
    return array;
  }

  


t3=performance.now();
sortedArray = quick_Sort(lista);
t4=performance.now();

t1=performance.now();
Burbuja(lista1);
t2=performance.now();

tburbuja=t2-t1;
tquicksort=t4-t3;

t1=performance.now();
var cub=bucketSort(lista2, 50000);
t2=performance.now();
let bucket= t2-t1;

console.log(sortedArray);
console.log(tburbuja+'ms  '+tquicksort+'ms');
document.writeln('tiempo de ejecucion de con burbuja '+tburbuja/1000+'s  ');
document.write('</br>');
document.writeln('tiempo de ejecucion de con quicksort '+tquicksort/1000+'s');
document.write('</br>');
document.writeln('tiempo de ejecucion de con bucketsort '+bucket/1000+'s');
console.log(cub);