// Function to fetch a random quote from the API
async function fetchRandomQuote() {
    try {
        const response = await fetch('https://hindi-quotes.vercel.app/random');
        const data = await response.json();
        displayQuote(data.type, data.quote);
        // displayQuote();
    } catch (error) {
        console.error('Error fetching the quote:', error);
        document.getElementById('type').textContent = 'Failed to fetch the type.';
        document.getElementById('quote').textContent = 'Failed to fetch the quote.';
    }
}

// Function to display the fetched quote in the UI
function displayQuote(type,quote) {
    document.getElementById('type').textContent = `Type:- ${type}`;
    document.getElementById('quote').textContent = `Quote: ${quote}`;
}



