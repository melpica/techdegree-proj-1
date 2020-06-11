/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote: `Emancipate yourselves from mental slavery.
    None but ourselves can free our minds.`,
    source: `Bob Marley`,
    citation: `Redemption Song`,
    year: `1980`,
    tags: `reggae`,
  },
  {
    quote: `I get by with a little help from my friends.`,
    source: `John Lennon`,
    citation: `With A Little Help From My Friends`,
    year: 1967,
    tags: "",
  },
  {
    quote: `Lose your dream, you lose your mind.`,
    source: `The Rolling Stones`,
    citation: `Ruby Tuesday`,
    year: 1967,
    tags: "",
  },
  {
    quote: `You don’t say good luck, you say don’t give up.`,
    source: `The Roots`,
    citation: `The Fire`,
    year: "",
    tags: "",
  },
  {
    quote: `I don’t make songs for free, I make ’em for freedom.`,
    source: `Chance the Rapper`,
    citation: `Blessings`,
    year: "",
    tags: `rap`,
  },
];
console.log(quotes);

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  let getQuote = [Math.floor(Math.random() * quotes.length)]; //generates a random number and assigns it to a variable

  let randomQuote = quotes[getQuote]; //grabs a random object using bracket notation from the `quotes` array and stores it to a variable

  return randomQuote; //return the variable storing the random quote object
}
// console.log(getRandomQuote());

/***
 * `printQuote` function
 ***/
function printQuote() {
  let randomQuote = getRandomQuote(); //calls the getRandomQuote() function and assigns it to a variable
  console.log(randomQuote);

  // Initialize the HTML string and store in a variable
  let htmlString = `<p class="quote">${randomQuote.quote}</p>`;
  htmlString += `<p class="source">${randomQuote.source}`;

  //Log out to test HTML String
  console.log(randomQuote.quote);
  console.log(randomQuote.source);

  // Check if the `citation` property exists, and if it does, concatenate to the HTML string
  if (randomQuote.citation) {
    htmlString += `<span class='citation'>${randomQuote.citation}</span>`;
  }
  console.log(randomQuote.citation); //Returns undefined if property does not exist

  // Check if the `year` property exists, and if it does, concatenate to the HTML string
  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  console.log(randomQuote.year); //Returns undefined if property does not exist

  /***
   * EXTRA CREDIT #1
   * Add at least one extra property to at least one quote object.
   * Add the new property to the HTML string similarly to how you added the “year” and “citation” properties.
   ***/

  // Check if the `tag` property exists, and if it does, concatenate to the HTML string
  if (randomQuote.tags) {
    htmlString += `<span class-"tags">, ${randomQuote.tags}</span>`;
  }
  console.log(randomQuote.tag); //Returns undefined if property does not exist

  // Close the HTML string after checking and adding for existing properties
  htmlString += `</p>`;

  // Set the variable  `htmlString to the `quote-box` div to complete the HTML string
  document.getElementById("quote-box").innerHTML = htmlString;

  //Log out to test `htmlString`
  console.log(htmlString);

  /***
   * EXTRA CREDIT #2
   * Background color changes to a random color each time the quote refreshes
   */

  // Use rgb Color Code where the rgb values are randomized from 0 - 255
  function changeBgColor(min, max) {
    document.body.style.background = `rgb(${[
      Math.floor(Math.random() * (max - min + 1) + min),
    ]}, ${[Math.floor(Math.random() * (max - min + 1) + min)]}, ${[
      Math.floor(Math.random() * (max - min + 1) + min),
    ]})`;
  }
  changeBgColor(0, 255);

  /***
   * EXTRA CREDIT #3
   * Quotes automatically refresh at regular intervals
   ***/

  /**
   * I went to Stackoverflow for help on setInterval() method
   * /***************************************************************************************
   *    Title: <use JavaScript setInterval method>
   *    Author: <Sameul Dauzon>
   *    Date: <June 21, 2018>
   *    Availability: <https://stackoverflow.com/questions/4644027/how-to-automatically-reload-a-page-after-a-given-period-of-inactivity>
   *
   ***************************************************************************************/
  function AutoRefresh() {
    setInterval("location.reload(true);", 10000); //Automatically refreshes the page every 10 seconds
  }
  AutoRefresh();
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
