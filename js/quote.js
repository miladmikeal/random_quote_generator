let apiURL = "https://got-quotes.herokuapp.com/quotes";
let gotQuote = document.querySelector(".got-quote");
let gotCharacter = document.querySelector(".got-character");

let quoteButton = document.querySelector("#newQuote");

function getData() {
    axios.get(apiURL)
        .then(response => {
            gotQuote.innerHTML = '"' + response.data.quote + '"';
            gotCharacter.innerHTML = '-' + response.data.character;
        })
        .catch(error => {
            gotQuote.innerHTML = "(An error has occured)";
            console.log(error);
        });
}

document.addEventListener("DOMContentLoaded", getData);
quoteButton.addEventListener('click', getData);