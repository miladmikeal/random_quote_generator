let apiURL = "https://got-quotes.herokuapp.com/quotes";
let gotQuote = document.querySelector(".got-quote");
let gotCharacter = document.querySelector(".got-character");
let tweetLink = document.querySelector(".tweet-link");
let quoteButton = document.querySelector("#newQuote");
let image = document.querySelector("#image");

function getData() {
    axios.get(apiURL)
        .then(response => {
            gotQuote.innerHTML = '"' + response.data.quote + '"';
            gotCharacter.innerHTML = '-' + response.data.character;
            let tweet = "https://twitter.com/intent/tweet?";
            tweet += "text=\"" + encodeURIComponent(response.data.quote).replace(/'/g, "%27") + "\"+—" + encodeURIComponent(response.data.character);
            tweetLink.href = tweet;
            switch (response.data.character) {
                case "Olenna Tyrell":
                    image.src = "../img/sigils/tyrell.jpg";
                    break;
                case "Jon Snow":
                    image.src = "../img/sigils/stark.jpg";
                    break;
                case "Bran":
                    image.src = "../img/sigils/stark.jpg";
                    break;
                case "Sansa":
                    image.src = "../img/sigils/stark.jpg";
                    break;
                case "Lord Rodrik":
                    image.src = "../img/sigils/stark.jpg";
                    break;
                case "Davos":
                    image.src = "../img/sigils/seaworth.jpg";
                    break;
                case "Vicatarion":
                    image.src = "../img/sigils/greyjoy.jpg";
                    break;
                case "Cersei Lannister":
                    image.src = "../img/sigils/Lannister.jpg";
                    break;
                case "Cersei and Tyrion":
                    image.src = "../img/sigils/Lannister.jpg";
                    break;
                case "Jaime Lannister":
                    image.src = "../img/sigils/Lannister.jpg";
                    break;
                case "Tyrion":
                    image.src = "../img/sigils/Lannister.jpg";
                    break;
                case "Bronn":
                    image.src = "../img/sigils/Lannister.jpg";
                    break;
                case "Samwell":
                    image.src = "../img/sigils/tarly.jpg";
                    break;
                case "The Hound":
                    image.src = "../img/sigils/clegane.jpg";
                    break;
                case "Littlefinger":
                    image.src = "../img/sigils/baelish.jpg";
                    break;
                case "Daenerys":
                    image.src = "../img/sigils/targaryen.jpg";
                    break;
                case "Renly Baratheon":
                    image.src = "../img/sigils/baratheon.jpg";
                    break;
                case "Brynden Tully":
                    image.src = "../img/sigils/tully.jpg";
                    break;
                default:
                    image.src = "../img/sigils/default.jpeg";
                    break;
            }
        })
        .catch(error => {
            gotQuote.innerHTML = "(An error has occured)";
            console.log(error);
        });
}

document.addEventListener("DOMContentLoaded", getData);
quoteButton.addEventListener('click', getData);