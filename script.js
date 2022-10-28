

let categoria = document.getElementById('categoria');
let cantidad = document.getElementById('cantidad');

console.log(categoria.value);
console.log(categoria.textContent)
console.log(categoria.innerHTML)



function datoInput(){
   console.log("probando")

   

   document.getElementById('resultadoInput').textContent = botonUnico.value;

   let valorBoton1 = botonUnico.value;

   if(valorBoton1>15){
      console.log("es mayor a 15")
   }


   let suma = valorBoton1 + valorBoton1;



   console.log(suma);

}






















