// Keep track of the current sorting state
let isAscending = true;

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

// When the page is loaded, add the abbreviation of each cryptocurrency
// to the HTML document
window.onload = function() {
  // Get all the elements with the ".company-container" class
  const containers = document.querySelectorAll(".company-container");

  containers.forEach(container => {
    const nameElement = container.querySelector(".name");
    const abbreviationElement = container.querySelector(".abbreviation");

    // Search the list array for an element with a name property that matches the name variable
    const element = list.find(el => el.name === nameElement.textContent.toLowerCase());

    // If an element was found, get its abbreviation value
    const abbreviation = element ? element.abbreviation : "";

    // Set the text content of the abbreviation element to the value of the abbreviation variable
    abbreviationElement.textContent = abbreviation;
  });
}

// Sort the list of cryptocurrency by price in ascending or
// descending order depending on the current sorting state
function sortByPrice() {
  // Get all the elements with the ".company-container" class
  const containers = document.querySelectorAll(".company-container");

  // Sort the elements by their .price element in ascending or
  // descending order depending on the current sorting state
  const sortedContainer = [...containers].sort((a, b) => {
    const priceA = parseFloat(a.querySelector(".price").innerText);
    const priceB = parseFloat(b.querySelector(".price").innerText);

    return isAscending ? priceA - priceB : priceB - priceA;
  });

  // Remove all the elements with the ".company-container" class from the
  // HTML document
  containers.forEach(container => container.parentNode.removeChild(container));

  // Add the sorted elements back to the HTML document
  sortedContainer.forEach(container => {
    document.body.appendChild(container);
  });

  // Flip the sorting state
  isAscending = !isAscending;
}

// Redirect the user to the page with the name of the company in the URL
function redirectToCryptoPage(id) {
  window.location.href = "cryptocurrency.html" + "?" + id;
}