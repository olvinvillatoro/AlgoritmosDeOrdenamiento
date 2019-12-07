//HEAPSORT
var numeros=[1,4,53,12,5,1];
var datos=[];
var hijoIzq;
var hijoDer;
var cambiarIdx;
var temp;
var idMedia;
  function cambiarDerecha(datos, min, maximo){
      var raiz =min;
      while ((raiz*2)+1 <= maximo){

             hijoIzq=(raiz*2)+1;
              hijoDer= hijoIzq+1;
              cambiarIdx= raiz;

            //comprobamos si la raiz es menor que el hijo izquierdo

            if (datos[cambiarIdx]<datos[hijoIzq]) {
                cambiarIdx=hijoIzq;
            }
            //si existe hijo a la derecha comprobar si es menor que la raiz actual.

                if ((hijoDer<=maximo) && (datos[cambiarIdx] < datos[hijoDer])) {

                        cambiarIdx=hijoDer;
                }
            //hacer el elemento mas grande de la raiz, izquierdo o derecho, la nueva raiz.

                if (cambiarIdx!=raiz) {
                    temp = datos[raiz];
                    datos[raiz]= datos[cambiarIdx];
                    datos[cambiarIdx] = temp;
                    //sigue cambiando  y se asegura que cambiarIdx satisface la propiedad heap, o sea el hijo izquierdo y derecho son menores que el
                    raiz = cambiarIdx;
                }
                else
                break;
            }
            return;

        
  }

  function heap(datos, min, maximo){
      //comienza con el elemento medio, se elige de manera que el ultimo elemento del arreglo es su hijo izquierdo o derecho
        idMedia=(maximo-min-1)*2;
        while (idMedia >= 0) {
            cambiarDerecha(datos, idMedia,maximo);
            idMedia--;
        }
        return;
  }

  function HEAPSORT(datos, tamano){

        heap( datos, 0, tamano-1);
        maximo=tamano-1;

        while (maximo > 0) {
            temp=datos[maximo];
            datos[maximo] = datos[0];
            datos[0]=temp;
            maximo--;
            cambiarDerecha(datos, 0, maximo);
            console.log(datos);
        }
  }

  HEAPSORT(numeros, 6);



