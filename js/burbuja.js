var datos=[];
var backgroundColor=[];
var comparando;
var segundos;
var cantidad;
var container = document.getElementById('arreglo');
let animation = anime.timeline({
    duration: 1000, 
    easing: 'easeInOutSine',
    direction: 'alternate',  
    loop: true
  });           
  

  
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
    for (let i = 0; i < datos.length; i++) {
        var objeto= document.createElement("div");

    objeto.setAttribute('id', 'dato'+i);
    objeto.setAttribute('class', 'dato');
    objeto.innerText=(datos[i]);
    container.appendChild(objeto);
}
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

            //pintar en arreglo vertical
            if(!container.hasChildNodes){
                console.log(container);
                container.forEach(element => {
                    list.removeChild(element); 
                });
            }

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
                  repintar(datos);
                  animar(j+1, j+2);

                    await timer(segundos*1000);
                }

                backgroundColor[j]='rgba(255, 99, 132, 0.2)';
                //setInterval(graficar(datos), 3000);
             
               console.log(datos);
                
            }
            
        }
       

        //console.log(datos);
    }
//animar arreglo vertical

function animar(d, d1){
    var d=['#dato'+d,'#dato'+d1 ];
    anime({
        targets: d,
        translateX: 250,
        direction: 'alternate',
        left: '240px',
        backgroundColor: '#d1a52c',
        borderRadius: ['0%', '20%'],
        easing: 'easeInOutQuad'
      });
      console.log('anime'+d);
      

}
function timer(ms) {
 return new Promise(res => setTimeout(res, ms));
}

function repintar(datos){
    var cambiarNumero;
        for (let i = 0; i < datos.length; i++) {
            cambiarNumero= document.getElementById('dato'+i);
            console.log('asd'+i);
            cambiarNumero.innerText=datos[i];
            
        }
}