# Domain Scraper 🔎

This is a JavaScript script that scrapes a web page for domain names, writes the domain names to a text file, and triggers a download of the file.
Here's a breakdown of what the script does:

1. The script creates an empty array called domains.
2. The script loops from i = 3 to i = 1000.
3. For each iteration of the loop, the script builds a query string that includes the current value of i.
4. The script uses document.querySelector to select the element using the current query string.
5. If no element was found, **to not break the loop i use console.log("#") but is possible ti use also continue.**
6. When an element was found, the script gets the text content of the element, splits it by spaces, and pushes the first part to the domains array.
7. Once the loop has completed (because it reached i = 1000), the domains array is converted to a string using the join method and a new Blob object is created from the string. I used 1000 beacuse i know that domains elements were less than 1000 in the webpage.
8. The script creates a new URL object from the Blob object and creates a new <a> element with the appropriate href and download attributes to trigger the download.
9. The script appends the <a> element to the DOM, clicks it to trigger the download, and removes it from the DOM.

**This script is specific to the web page being scraped (https://zonefiles.io/detailed-domain-lists/), and assumes that the domain names are located in a specific table on the page. You may need to modify the script if you are scraping a different web page or if the page layout changes.**

## How to use the script 📝

To use the JavaScript script provided, simply navigate to the webpage that you want to scrape for domain names in your web browser. Once on the webpage, open the browser console by pressing **Ctrl + Shift + J** on Windows or **Cmd + Option + J** on Mac. Then, copy and paste the script into the console and press Enter to execute it.


<img width="612" alt="image" src="https://user-images.githubusercontent.com/91114967/224440412-a96d1200-453f-46b5-b592-42ced11f4567.png">


The script will scrape the webpage for domain names, write them to a text file, and trigger a download of the file.


<img width="576" alt="image" src="https://user-images.githubusercontent.com/91114967/224440564-c271560f-531d-4e5b-b5a4-ca10e1f0b511.png">


The resulting text file can then be opened and used as needed.


<img width="613" alt="image" src="https://user-images.githubusercontent.com/91114967/224440311-97a3365c-ab19-4837-a05d-3affb80ba417.png">
