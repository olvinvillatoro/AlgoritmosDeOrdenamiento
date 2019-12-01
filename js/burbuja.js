var datos=[];
var backgroundColor=[];
var comparando;
var segundos;
var cantidad;
console.log(datos);
console.log(backgroundColor);
console.log(cantidad);
console.log(segundos);

function ordenar(){
        comparando='rgba(54, 162, 235, 0.2)';
        segundos= document.getElementById('segundos').value;
        cantidad = document.getElementById('cantidad').value;
        console.log(datos);
            for (let i = 0; i < cantidad; i++) {
                datos[i]=Math.floor(Math.random() * 100);
                backgroundColor[i]='rgba(255, 99, 132, 0.2)';
        
            }
    console.log(datos);
    console.log(backgroundColor);
    console.log(cantidad);
    console.log(segundos);
    bubble(datos);

    

}




    
   function graficar(datos){

          var ctx = document.getElementById('myChart').getContext('2d');
          var chart = new Chart(ctx, {

          type: 'bar',


          data: {
             labels: datos,
              datasets: [{
                  label: 'burbuja',
                  backgroundColor: backgroundColor,
                  borderColor: 'rgb(255, 99, 132)',
                  data: datos
              }]
                },          

            options: {}
        });
   }
async function bubble(datos){
        var datosTemp;
        var colorTemp;
        for (let i = 1; i < datos.length-1; i++) {
            for (let j = 0; j < datos.length-i; j++) {
                
                backgroundColor[j+2]=comparando;
                backgroundColor[j+1]=comparando;
                backgroundColor[j]='rgba(255, 99, 132, 0.2)';
                if (datos[j]>datos[j+1]){
                    datosTemp=datos[j];
                    datos[j]=datos[j+1];
                    datos[j+1]=datosTemp;
                    

                  graficar(datos);
                    await timer(segundos*1000);
                }

                backgroundColor[j]='rgba(255, 99, 132, 0.2)';
                //setInterval(graficar(datos), 3000);
             
               console.log(datos);
                
            }
            
        }
       

        //console.log(datos);
    }

function timer(ms) {
 return new Promise(res => setTimeout(res, ms));
}