# Random Quote Generator

This is a simple web application that displays random quotes. It fetches quotes from the Quotable API and has a fallback to local quotes if the API is unavailable. Users can also tweet the displayed quote.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Run

1. Clone this repository.
2. Open the `index.html` file in your web browser.

## JavaScript Components

The `script.js` file contains the logic for fetching and displaying quotes. Here's a breakdown of its main components:

- **`LOCAL_QUOTES`**: An array of quote objects used as a fallback if the API is unavailable. Each object contains `text` and `author` properties.
- **DOM Element Variables**:
    - `quoteEl`: Reference to the HTML element where the quote text is displayed.
    - `authorEl`: Reference to the HTML element where the quote's author is displayed.
    - `newBtn`: Reference to the "New Quote" button.
    - `tweet`: Reference to the "Tweet" link.
- **`fetchQuote()`**: An asynchronous function that:
    - Attempts to fetch a random quote from the `https://api.quotable.io/random` API.
    - If the API call is successful, it returns an object with the `text` (content) and `author` of the quote.
    - If the API call fails (e.g., network error, API unavailable), it catches the error and returns a random quote from the `LOCAL_QUOTES` array.
- **`render()`**: An asynchronous function that:
    - Calls `fetchQuote()` to get a quote.
    - Updates the `textContent` of `quoteEl` and `authorEl` to display the new quote and author.
    - Updates the `href` attribute of the `tweet` link to include the current quote, making it ready for tweeting.
- **Event Listeners**:
    - An event listener is attached to the `newBtn` ("New Quote" button). When clicked, it calls the `render()` function to fetch and display a new quote.
    - An event listener is attached to the `window` for the `DOMContentLoaded` event. This ensures that the `render()` function is called once the initial HTML document has been completely loaded and parsed, displaying a quote when the page first loads.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
