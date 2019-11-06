// console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
 
// let imageId = 2880 //Enter the id from the fetched image here

// const imageURL = `https://randopic.herokuapp.com/images/2880`

// const likeURL = `https://randopic.herokuapp.com/likes/`

// const commentsURL = `https://randopic.herokuapp.com/comments/`

//------- Step 1 - Get the Image Data ---------------------------------

const imageCard = document.getElementById("image_card");

document.addEventListener('DOMContentLoaded', () => {

  fetch("https://randopic.herokuapp.com/images/2880")
  .then(response => response.json())
  .then(displayImageObj)

  function displayImageObj(imageObj) {
    const imgTag = document.querySelector('#image');
      imgTag.src = imageObj.url;

    const nameID = document.querySelector('#name');
      nameID.innerText = imageObj.name;

    const likesSpan = document.querySelector('#likes')
    .innerText = imageObj.like_count;
    document.querySelector('#comments').innerHTML = 
    `${imageObj.comments.map(comment => 
      `<li>${comment.content}</li> 
      <button type="button" id="delete-button">delete</button>`)
      .join("")}`

    // document.querySelector('#comments').append(display(imageObj.comments));

    // function display(commentArr) {
    //   commentArr.forEach(function(comment) {

    //     `<li id="comment-li">${comment.content}</li>`
    //     "<button onclick="deleteComment()">Delete comment</button>"

    //     function deleteComment() {
    //       console.log('hi');
    //     }

    //   })
    // };

  };
});

//---------Step 2 - Like Feature ---------------------

// get event target
const likeButton = document.getElementById("like_button");
const likesSpan = document.getElementById("likes");

likeButton.addEventListener('click', addLikeCount)

function addLikeCount(event) {
  // counts before click
  likeCount = parseInt(likesSpan.innerHTML);

  // counts after click
  let newCount = likeCount + 1;

  // update DOM like count
  likesSpan.innerText = newCount;

// ---------Step 3 - Like Feature (Backend)--------------------------
    //update database
    fetch('https://randopic.herokuapp.com/likes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: 2880,
        like_count: newCount
      })
    });
  };

// ----------- Step 4 - Comment Feature (Frontend) ------------------------

// set relevant event targets
const commentForm = document.getElementById("comment_form");
const commentsUl = document.getElementById("comments");
const commentInput = document.getElementById("comment_input");

commentForm.addEventListener('submit', function(event) {
  
  event.preventDefault();

  const commentLi = document.createElement('li');
  
  commentLi.innerText = commentInput.value;
  // commentForm.comment.value --- form input can use this way to get value

  commentsUl.append(commentLi);

  fetch("https://randopic.herokuapp.com/comments", {
  method: 'POST',
  headers: 
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  body: JSON.stringify({
      image_id: 2880,
      content: commentInput.value
      })

  });

// reset the form
  commentForm.reset();

});

// --------- Step 6 - Delete a comment feature   -----------------
//cannot seem to get the element? it is not in html, how do we get the element?
// document.getElementById("delete-button").addEventListener('click', function() {
//   debugger
//   event.target.parentElement.remove();
// });


