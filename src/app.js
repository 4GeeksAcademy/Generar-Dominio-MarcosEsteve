let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function GenerarDominio(primero, segundo, tercero) {
  let Dominio = "";
  for (let i = 0; i < primero.length; i++) {
    for (let j = 0; j < segundo.length; j++) {
      for (let x = 0; x < tercero.length; x++) {
        Dominio += primero[i] + segundo[j] + tercero[x] + ".com\n";
      }
    }
  }
  return Dominio;
}
console.log(GenerarDominio(pronoun, adj, noun));
