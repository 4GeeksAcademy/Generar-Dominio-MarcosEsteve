window.onload = function() {
  let pronoun = ["the", "our", "his", "her", "its", "their", "my", "your", "our", "their", "a", "an"];
  let adj = ["great", "big", "small", "tiny", "huge", "gigantic", "magnificent", "lovely", "charming", "elegant", "bright", "dark"];
  let noun = ["jogger", "racoon", "lion", "tiger", "bear", "eagle", "shark", "wolf", "dragon", "phoenix", "unicorn", "dolphin"];

  let iteraciones = "";
  const inputElemento = document.querySelector("#inputusuario");
  inputElemento.addEventListener("input", function(event) {
      iteraciones = event.target.value;
      const seleccionaOtro = document.querySelector("#seleccionaotro");
      if (iteraciones > pronoun.length){ 
        seleccionaOtro.innerHTML = "Introduce otro número";} 
      else seleccionaOtro.innerHTML = "Has seleccionado " +iteraciones*3+ " dominios.";  
    
  }); 

  function generarDominio(primero, segundo, tercero) {
      let Dominio = "";
      let contador = 0;
      for (let i = 0; i < primero.length; i++) {
          for (let j = 0; j < segundo.length; j++) {
              for (let x = 0; x < tercero.length; x++) {
                  Dominio += primero[i] + segundo[j] + tercero[x] + ".com\n";
                  contador += 1;
              }
          }
      }
      return Dominio;
  }

  function cuentaDominios(primero, segundo, tercero) {
      let contador = 0;
      for (let i = 0; i < primero.length; i++) {
          for (let j = 0; j < segundo.length; j++) {
              for (let x = 0; x < tercero.length; x++) {
                  contador += 1;
              }
          }
      }
      return contador;
  }

  document.querySelector("#dominios").innerText = generarDominio(pronoun, adj, noun);
  document.querySelector("#conteo").innerText = cuentaDominios(pronoun, adj, noun);
};
