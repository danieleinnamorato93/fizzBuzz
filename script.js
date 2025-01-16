//!Recupero l'elemento lista (ul)
const list = document.getElementById("numbers-list");
//! Preparo la stringa che conterrà gli elementi
let items = "";

for (let i = 1; i <= 100; i++) {
  let content = i;

  if (i % 3 === 0 && i % 5 === 0) {
    content = `FizzBuzz`;
  } else if (i % 3 === 0) {
    content = `Fizz`;
  } else if (i % 5 === 0) {
    content = `Buzz`;
  }
  items += `<li class="${content}">${content}</li>`;
}

//! Inserisco i risultati nella lista in pagina
list.innerHTML = items;
