const image = document.querySelector('.char-image');

const getRandomQuote = () => {
  const random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
};

const displayQuote = () => {
  let quote = getRandomQuote();
  let quoteHtml = '';
  let authorHtml = '';

  quoteHtml += `"${quote.quote}"`;
  
  authorHtml += `<strong>${quote.character}</strong> &nbsp; (${quote.episode} - Season ${quote.season})`;


  document.querySelector('.quote-text').innerHTML = quoteHtml;
  document.querySelector('.quote-author').innerHTML = authorHtml;
};

//displayQuote();

image.addEventListener('click', () => {
  displayQuote();
});