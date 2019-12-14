var lista=[];
var lista1=[];
var t1,t2,t3,t4, tburbuja, tquicksort;
var sortedArray ;


for (let index = 0; index < 50000; index++) {
    lista[index]=Math.floor(Math.random() * 100);
    lista1[index]=Math.floor(Math.random() * 100);

    
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

t3=performance.now();
sortedArray = quick_Sort(lista);
t4=performance.now();

t1=performance.now();
Burbuja(lista1);
t2=performance.now();

tburbuja=t2-t1;
tquicksort=t4-t3;
console.log(sortedArray);
console.log(tburbuja+'ms  '+tquicksort+'ms');
document.writeln('tiempo de ejecucion de con burbuja '+tburbuja/1000+'s  ');
document.writeln('tiempo de ejecucion de con burbuja '+tquicksort/1000+'s');