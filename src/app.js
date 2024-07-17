
window.onload = function() {
let pronoun = ["the", "our", "his", "her", "its", "their", "my", "your", "our", "their", "a", "an"]
let adj = ["great", "big", "small", "tiny", "huge", "gigantic", "magnificent", "lovely", "charming", "elegant", "bright", "dark"];
let noun = ["jogger", "racoon", "lion", "tiger", "bear", "eagle", "shark", "wolf", "dragon", "phoenix", "unicorn", "dolphin"];

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
  
  let parrafo = document.querySelector("#excusa");
  parrafo.innerHTML = generar_excusa();
  document.getElementById("botonexcusa").addEventListener("click", function() {
    parrafo.innerHTML = generar_excusa();
  });
  
};
console.log (cuenta());

