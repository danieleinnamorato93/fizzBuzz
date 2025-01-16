//!Recupero la lista
const list = document.getElementById("numbers-list");
let items = "";

for (let i = 1; i <= 100; i++) {
  //console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    items += `<li>FizzBuzz</li>`;
  } else if (i % 3 === 0) {
    items += `<li>Fizz</li>`;
  } else if (i % 5 === 0) {
    items += `<li>Buzz</li>`;
  } else {
    items += `<li>${i}</li>`;
  }
}

//! Inserisco i risultati nella lista in pagina
list.innerHTML = items;
