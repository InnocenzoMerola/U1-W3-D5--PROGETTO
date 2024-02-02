/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;
console.log("Es. A: ", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 20);
console.log("Es. B: ", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Innocenzo",
  surname: "Merola",
  age: 21,
};
console.log("Es. C: ", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log("Es. D: ", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const skills = ["html", "CSS"];
me.skills = skills;
console.log("Es. E: ", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("jss");
console.log("Es. F: ", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log("Es. G: ", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  num = Math.floor(Math.random() * 6) + 1;
  return num;
};
console.log("Es. 1: ", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(n1, n2) {
  if (n1 > n2) {
    return console.log("Es. 2: ", n1 + " " + "è il numero più grande");
  } else {
    return console.log("Es. 2: ", n2 + " " + "è il numero più grande");
  }
}

whoIsBigger(25, 20);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

// let text = "Epicode is a school";
const splitMe = function (text) {
  const separate = text.split(" ");
  let word = separate[1];
  console.log("Es. 3: ", separate);
};
splitMe("Epicode is a school");

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (string, booleano) {
  if (booleano) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
};
console.log("Es. 4: true", deleteOne("Epicode", true));
console.log("Es. 4: false", deleteOne("Epicode", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(string) {
  const notNum = string.replace(/[0-9]/, "");
  return notNum;
}
console.log("Es. 5: ", onlyLetters("Today is th 2 of month"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
  let input = document.createElement("input");
  input.type = "email";
  input.value = email;
  return input.checkValidity();
}
console.log("Es. 6: ", isThisAnEmail("enzomerola02@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt(date) {
  const today = ["Lunedì", "Martedì", "Merledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

  return today[date.getDay() - 1];
}

const data = new Date(2024, 1, 2);
console.log("Es. 7: ", whatDayIsIt(data));

/* ESERCIZIO 8
Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
    }
    */

function rollTheDices(num) {
  let sum = 0;
  let value = [];
  for (let i = 0; i < num; i++) {
    let roll = dice();
    value.push(roll);
    sum += roll;
  }
  return sum, value;
}

console.log("Es. 8: ", rollTheDices(5));

/* ESERCIZIO 9
   Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
   */

function howManyDays(date) {
  const myDate = new Date(date);
  const currentDate = new Date();
  const distance = currentDate - myDate;

  const daysDifference = Math.floor(distance / (1000 * 60 * 60 * 24));
  return daysDifference;
}

const myDate = new Date(2024, 0, 30);
console.log("Es. 9: ", howManyDays(myDate));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
  */

function isTodayMyBirthday(today) {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;

  const myBirthday = today.getDate();
  const myBirthdayMonth = today.getMonth() + 1;
  return day === myBirthday && month === myBirthdayMonth;
}

const today = new Date(2002, 10, 14);
console.log("Es. 10: ", isTodayMyBirthday(today));
const today1 = new Date(2024, 1, 2);
console.log("Es. 10: ", isTodayMyBirthday(today1));

// Arrays & Oggetti
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = function (obj, string) {};

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function (array) {
  let result = array[0];

  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const movie = array[i];
      const currentYear = parseInt(movie.Year);

      if (currentYear > result.Year) {
        result = movie;
      }
    }
  }
  return result;
};
console.log("Es. 12: ", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (array) => array.length;
console.log("Es. 13: ", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
  const yearOnly = movies.map((yearObj) => yearObj.Year);
  return yearOnly;
}
console.log("Es. 14: ", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
  const lastMillMovie = movies.filter((moviesObj) => moviesObj.Year < 2000);
  return lastMillMovie;
}
console.log("Es. 15: ", onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (arr) => arr.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.Year), 0);
console.log("Es. 16: ", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

// function searchByTitle(str) {
//  for(let i=0; i<movies.length;i++){
//   const title=movies[i].str
//   const objTitle = movies.filter((movies.title)=> movies.length === "The")
//  }
// }
// console.log("Es. 17: ", searchByTitle());

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(str) {}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(numb) {
  const tabMovie = movies.slice(numb, 0);
  return tabMovie;
}
console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const element = function () {
  const select = document.getElementById("container");
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function tagSelect() {
  // const table = document.getElementsByTagName("table");
  // const thead = document.getElementsByTagName("thead");
  // const tr = document.getElementsByTagName("tr");
  const td = document.querySelectorAll("td");
}

console.log("Es. 21: ", tagSelect());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
  */

function tdContent() {
  const td = document.querySelectorAll("td");

  for (let i = 0; i < td.length; i++) {
    oneTd = td[i].innerText;
    console.log(oneTd);
  }

  //   td.forEach((td) => {
  //     const content = td.content;
  //     console.log(content);
  //   });
}
tdContent();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function backRed() {
  const link = document.querySelectorAll("a");

  link.forEach((link) => {
    link.style.backgroundColor = "red";
  });
}
backRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function ulList() {
  const listUl = document.getElementById("myList");
  const listLi = document.createElement("li");
  listLi.innerText = "thirdOne";
  listUl.appendChild(listLi);
}
ulList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// deleteUl(() => {});

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function classi() {
  const tr = document.querySelectorAll("tr");
  tr.classList.add("test");
}
classi();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
