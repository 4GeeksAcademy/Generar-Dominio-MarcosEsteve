window.onload = function() {
  let pronoun = ["the", "our", "his", "her", "its", "their", "my", "your", "our", "their", "a", "an"];
  let adj = ["great", "big", "small", "tiny", "huge", "gigantic", "magnificent", "lovely", "charming", "elegant", "bright", "dark"];
  let noun = ["jogger", "racoon", "lion", "tiger", "bear", "eagle", "shark", "wolf", "dragon", "phoenix", "unicorn", "dolphin"];

  let iteraciones = "";
  const inputElemento = document.querySelector("#inputusuario");
  inputElemento.addEventListener("input", function(event) {
      iteraciones = event.target.value;
      const seleccionaOtro = document.querySelector("#seleccionaotro");
      if (iteraciones > pronoun.length) {
          seleccionaOtro.innerHTML = "Introduce otro número";  
      } else {
          seleccionaOtro.innerHTML = "Has seleccionado " +iteraciones*3+ " dominios.";  
      }
  }); // Cierre correcto del event listener

  function GenerarDominio(primero, segundo, tercero) {
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

  function cuenta(primero, segundo, tercero) {
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

  document.querySelector("#dominios").innerText = GenerarDominio(pronoun, adj, noun);
  document.querySelector("#conteo").innerText = cuenta(pronoun, adj, noun);
};
