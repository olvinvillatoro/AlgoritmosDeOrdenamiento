
var datos=[20,5,10,4,1,5,12,6,6,2];
var comparando='rgba(54, 162, 235, 0.2)';
var  backgroundColor= [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                ];
bubble(datos);
    


    
   function graficar(datos){

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
       labels: datos,
        datasets: [{
            label: 'burbuja',
            backgroundColor: backgroundColor,
            borderColor: 'rgb(255, 99, 132)',
            data: datos
        }]
    },

    // Configuration options go here
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
                    //compara colores
                    // colorTemp=backgroundColor[j];
                    // backgroundColor[j]=backgroundColor[j+1];
                    // backgroundColor[j+1]=colorTemp;
                   
                      
                    

                    


                  graficar(datos);
                    await timer(3000);
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