function tiempos(){
    var lista=[];
    var lista1=[];
    var lista2=[];
    var lista3=[];
    var t1,t2, tburbuja, tquicksort;
    var sortedArray ;
    var randomNumber;
    
    function runtime(cantDatos){
        var tiempos=[];
        for (let index = 0; index < cantDatos; index++) {
            randomNumber=Math.floor(Math.random() * 100);
            lista [index]=randomNumber;
            lista1[index]=randomNumber;
            lista2[index]=randomNumber;
            lista3[index]=randomNumber;
        }
    //runtime de quicksort
    t2=performance.now();
    sortedArray = quick_Sort(lista);
    t1=performance.now();
    tquicksort=(t2-t1)/1000;
    
    // runtime burbuja
    t1 = performance.now();
    Burbuja(lista1);
    t2 = performance.now();
    tburbuja=(t2-t1)/1000;
    //runtime bucket
    t1=performance.now();
    var cub=bucketSort(lista2, cantDatos);
    t2=performance.now();
    var bucket= (t2-t1)/1000;
    
    //runtime shakesort
    t1=performance.now();
    shakesort(lista3);
    t2=performance.now();
    var tshakesort= (t2-t1)/1000;
    //guardar tiempos calculados para devolverlos
    tiempos[0]=tquicksort;
    tiempos[1]=tburbuja;
    tiempos[2]=bucket;
    tiempos[3]=tshakesort;
    
    console.log(tiempos);
    return tiempos;
    }
    
    function Burbuja(lista) {
    
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
    
      
    function shakesort(nums){
        
    console.log("Original array:");
    console.log(nums);
    let is_Sorted = true;
    while (is_Sorted){
       for (let i = 0; i< nums.length - 1; i++){
               if (nums[i] > nums[i + 1])
                {
                   let temp = nums[i];
                   nums[i] = nums[i + 1];
                   nums[i+1] = temp;
                   is_Sorted = true;
                }
       }
    
       if (!is_Sorted)
           break;
    
       is_Sorted = false;
    
       for (let j = nums.length - 1; j > 0; j--){
               if (nums[j-1] > nums[j])
                {
                   let temp = nums[j];
                   nums[j] = nums[j - 1];
                   nums[j - 1] = temp;
                   is_Sorted = true;
                }
       }
    }
    return nums;
    }
    
    
    
    /*console.log(sortedArray);
    console.log(tburbuja + 'ms  ' + tquicksort + 'ms');
    document.writeln('tiempo de ejecucion de con burbuja ' + tburbuja / 1000 + 's  ');
    document.writeln('tiempo de ejecucion de con burbuja ' + tquicksort / 1000 + 's');*/
    
    function graficar() {
      var colores = ["rgba(241,28,39,1,0.3)", //red
                "rgba(28,145,241,1,0.3)",//blue
                "rgba(231,221,28,1,0.3)", //yellow
                "rgba(38,231,28,1,0.3)", //green
                           ];
        labels=['Quicksort','Burbuja','Bucketsort','Shakesort'];
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
    
            type: 'radar',
          
            data: {
               labels:labels,
            //    backgroundColor: colores,
                datasets: [{
                    label: '50,000 Datos',
                    backgroundColor:'rgba(38,231,28,1,0.3)',//["rgba(241,28,39,1)", //red
                    // "rgba(28,145,241,1)",//blue
                    // "rgba(231,221,28,1)", //yellow
                    // "rgba(38,231,28,1)", //green
                    //            ],
                  
                    data: datos
                }, {
                  label:'5,000 Datos',
                  backgroundColor:"rgba(28,145,241,0.4)",//blue
                  data:datos1
                },
                {
                    label:'500 Datos',
                   backgroundColor:"rgba(231,221,28,1,0.4)",
                    data:datos2
                  },
                  {
                    label:'50 Datos',
                   backgroundColor:"rgba(241,28,39,0.4)", //red,
                    data:datos3
                  }],
                
            },
    
            
        });
    
        // //pintar en arreglo vertical
        // if (!container.hasChildNodes) {
        //     container.forEach(element => {
        //         list.removeChild(element);
        //     });
        // }
    
    console.log(sortedArray);
    console.log(tburbuja+'ms  '+tquicksort+'ms');
    console.log(cub);
    }
    
    
    
    var datos=runtime(50000);
    var datos1=runtime(5000);
    var datos2=runtime(500);
    var datos3=runtime(50);
    
    console.log(datos);
    console.log(datos1);
    console.log(datos2);
    console.log(datos3);
    graficar();
    
}