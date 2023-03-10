// URL:
// https://zonefiles.io/detailed-domain-lists/

// Create an empty array to store the domains
const domains = [];

// Loop from 3 to 1000
for (let i = 3; i <= 1000; i++) {
  // Build the query string for the current iteration of the loop
  const query = `body > div.container > div.row.indexpage-content > div > div > div > table > tbody > tr:nth-child(${i}) > td:nth-child(1) > a`;

  // Select the element using the query string
  const element = document.querySelector(query);

  // If no element was found, break out of the loop
  if (!element) {
    console.log("#");
  } else {
    // Get the text content of the element
    const textContent = element.textContent.trim();

    // Split the text content by spaces
    const parts = textContent.split(" ");

    // Add the first part to the domains array
    domains.push(parts[0]);
  }
}

// Convert the domains array to a string
const domainString = domains.join("\n");

// Create a new Blob object from the domain string
const blob = new Blob([domainString], { type: "text/plain" });

// Create a new URL object from the Blob object
const url = URL.createObjectURL(blob);

// Create a new <a> element and set its attributes
const a = document.createElement("a");
a.setAttribute("href", url);
a.setAttribute("download", "domains.txt");

// Append the <a> element to the DOM
document.body.appendChild(a);

// Click the <a> element to trigger the download
a.click();

// Remove the <a> element from the DOM
document.body.removeChild(a);
