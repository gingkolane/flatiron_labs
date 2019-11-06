// It might be a good idea to add event listener to make sure this file 
// only runs after the DOM has finshed loading. 

function createOneQuoteLi(id, quote, author) {

  // define html elements of a quote card 
  // We have to define all this inside this function because we need to create a new card 
  // for each quote. In the future, we can create a class/prototype and make a new instance of card. 

  const quoteCard = document.createElement('li');

  const blockQuoteTag = document.createElement('blockquote');
  blockQuoteTag.classList.add('blockquote');

  const pTag = document.createElement('p');
  pTag.classList.add('mb-0');

  const footerTag = document.createElement('footer');
  footerTag.classList.add('blockquote-footer');

  const likeBtnTag = document.createElement('button');
  likeBtnTag.classList.add('btn-success');
  likeBtnTag.innerText = "Likes: 0"

  const deleteBtnTag = document.createElement('button');
  deleteBtnTag.classList.add('btn-danger');
  deleteBtnTag.innerText = "Delete" 

  //associate individual elements
  blockQuoteTag.append(pTag, footerTag, likeBtnTag, deleteBtnTag)
  quoteCard.append(blockQuoteTag);

  // attach data to elements 
  pTag.innerText = quote;
  footerTag.innerText = author;

  // add dataset access points
  quoteCard.dataset.id = id;
  likeBtnTag.dataset.likeCount = 0;
  likeBtnTag.dataset.id = id;

  return quoteCard;  //must have this return!!!!

}

//fetch all quotes and display one by one  
const quoteListUlTag = document.getElementById('quote-list')

fetch('http://localhost:3000/quotes')
.then(response => response.json())
.then(quotes => {
  quotes.forEach( quote => { 
    
    let oneCard = createOneQuoteLi(quote.id, quote.quote, quote.author);

    quoteListUlTag.append(oneCard);

  });
});

//--------------get form data and display on DOM--------------------
const newQuoteForm = document.getElementById('new-quote-form');

newQuoteForm.addEventListener('submit', function(event) {

  event.preventDefault();

  //get form data
  let inputQuote = event.currentTarget.querySelector('#new-quote').value;
  let inputAuthor = event.currentTarget.querySelector('#author').value

  // create a new card with form data then append it to quoteList
  // update the DOM
  let newCard = createOneQuoteLi(99, inputQuote, inputAuthor);

  quoteListUlTag.append(newCard);

});

//===============Features====================

quoteListUlTag.addEventListener('click', function (event) {

  //------------- delete feature -------------------
  if (event.target.className === 'btn-danger') {
    //delete the elment on the DOM
    event.target.parentElement.parentElement.remove();
  }

  //------------- like feature -----------------------
  else if (event.target.className === 'btn-success') {

    let thisLikeBtn = event.target;
    let id = parseInt(event.target.dataset.id);

    let currentLikeCount = parseInt(event.target.dataset.likeCount);
    let updatedLikeCount = currentLikeCount + 1;

    // update the DOM
    event.target.dataset.likeCount = updatedLikeCount;
    thisLikeBtn.innerHTML = `Likes ${updatedLikeCount}`;

    // update db.json
    fetch("http://localhost:3000/likes", {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },

      body: JSON.stringify({
        quoteId: `${id}`
      })

    });




  };
});

filteredLikeCount = likeJson.filter(quoteId = 1)







