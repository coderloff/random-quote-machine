interface Props {
  quote: any;
  handleNewQuote: any;
  color: any;
}

const Quote = ({ quote, handleNewQuote, color }: Props) => {
  document.documentElement.style.setProperty('--main-color', color.color);
  return (
    <div id="quote-box">
      <div className="quote-text">
        <i className="fa fa-quote-left quote-icon"></i>
        <span id="text">{quote.text}</span>
      </div>
      <div className="quote-author">
        <span id="author">- {quote.author}</span>
      </div>
      <div className="actions">
        <a
          href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"+quote.text+"%22"+quote.author}
          id="tweet-quote"
          target="_blank"
          className="quote-button"
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <button id="new-quote" className="quote-btn" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
