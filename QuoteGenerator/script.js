document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    const apiUrl = '/.netlify/functions/index/get-quote'; 

    async function fetchNewQuote() {
        quoteText.textContent = "Loading...";
        quoteAuthor.textContent = "";

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            let data = await response.json();
            console.log('Fetched quote data:', data);
            ; 

            quoteText.textContent = data[0].q; // Quote text
            quoteAuthor.textContent = `${data[0].a}`; // Quote author
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteText.textContent = "Failed to load quote. Please try again.";
            quoteAuthor.textContent = "";
        }
    }

    fetchNewQuote();

    newQuoteBtn.addEventListener('click', fetchNewQuote);
});