let apiURL = "https://got-quotes.herokuapp.com/quotes";
let gotQuote = document.querySelector(".got-quote");
let gotCharacter = document.querySelector(".got-character");
let tweetLink = document.querySelector(".tweet-link");
let quoteButton = document.querySelector("#newQuote");


function getData() {
    axios.get(apiURL)
        .then(response => {
            gotQuote.innerHTML = '"' + response.data.quote + '"';
            gotCharacter.innerHTML = '-' + response.data.character;
            let tweet = "https://twitter.com/intent/tweet?";
            tweet += "text=\"" + encodeURIComponent(response.data.quote).replace(/'/g, "%27") + "\"+—" + encodeURIComponent(response.data.character);
            tweetLink.href = tweet;
        })
        .catch(error => {
            gotQuote.innerHTML = "(An error has occured)";
            console.log(error);
        });
}

document.addEventListener("DOMContentLoaded", getData);
quoteButton.addEventListener('click', getData);