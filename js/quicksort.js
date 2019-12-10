


 var datos = ['10','2','4','5'];
var container = document.getElementById('arreglo');
for (let i = 0; i < datos.length; i++) {
  var objeto= document.createElement("div");

  objeto.setAttribute('id', 'dato'+i);
  objeto.setAttribute('class', 'dato');
  objeto.innerText=(datos[i]);
  container.appendChild(objeto);
}

anime({
  targets: '#dato0',
  translateX: 250,
  left: '240px',
  backgroundColor: '#d1a52c',
  borderRadius: ['0%', '20%'],
  easing: 'easeInOutQuad'
});



function pro(datos){
      for (let index = 0; index < datos.length; index++) {
        compara( datos[index], datos[index+1]);
        
      }
}

