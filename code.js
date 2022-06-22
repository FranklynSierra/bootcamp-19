


//curso


function verdad(){
 return true
}
// function repetir(){
 
// }


function* generaId(){
    let id=0
    while(true){
        id++

        if(id===10){
            return id
        }
        yield id*2
    }
    
}

const gen=generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
function temporizador() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hola soy una promesa');
      }, 5000);
    });
  }
  



  async function llamada() {
    console.log('llamando');
    const resultado = await temporizador();
    console.log(resultado);

  }
  
llamada();
  





