// List with the abbreviation of some cryptocurrencies
const list = [
  { name: "bitcoin", abbreviation: "BTC" },
  { name: "ethereum", abbreviation: "ETH" },
  { name: "dogecoin", abbreviation: "DOGE" },
  { name: "tether", abbreviation: "USDT" },
  { name: "bnb", abbreviation: "BNB" },
  { name: "cardano", abbreviation: "ADA" },
  { name: "xrp", abbreviation: "XRP" },
  { name: "chainlink", abbreviation: "LINK" },
  { name: "tezos", abbreviation: "XTZ" },
  { name: "monero", abbreviation: "XMR" },
  { name: "tron", abbreviation: "TRX" },
  { name: "neo", abbreviation: "NEO" },
  { name: "ethereum classic", abbreviation: "ETC" },
  { name: "cosmos", abbreviation: "ATOM" },
  { name: "binance coin", abbreviation: "BNB" },
  { name: "filecoin", abbreviation: "FIL" },
  { name: "nem", abbreviation: "XEM" },
  { name: "vechain", abbreviation: "VET" },
];


window.onload = function() {
  // Get the name of the cryptocurrency from the query string in the URL
  const queryString = window.location.search.substring(1);

  // Search the list array for an element with a name property that matches the name variable
  const element = list.find(el => el.name === queryString);

  // If an element was found, get its abbreviation value
  const abbreviation = element ? element.abbreviation : "";

  // Select the element with the class "abbreviation" inside of the "name-container" element
  const abbreviationElement = document.querySelector('.name-container .abbreviation');

  // Select the element with the class "amount_title" inside of the "transaction-container" element
  const amountTitleElement = document.querySelector('.transaction-container .amount_title');

  // Set the text content of the abbreviation element to the value of the abbreviation variable
  abbreviationElement.textContent = abbreviation;

  // Set the text content of the amountTitle element to the value of the abbreviation variable
  amountTitleElement.textContent = amountTitleElement.textContent + "(" + abbreviation + ")";

  const name = queryString.charAt(0).toUpperCase() + queryString.slice(1);

  // Select the element with the "name" class
  const nameElement = document.querySelector('.name-container .name');

  // Set the innerHTML of the element to the value of the "name" query string parameter
  nameElement.innerHTML = name;
}
