// {/* <form id='github-form'>
// <input id='search' type='text' name='search'>
// <input type='submit' name='submit'/>
// </form> */}

// get event target
const githubForm = document.getElementById('github-form');
const userListUL =document.getElementById('user-list');
const reposListUL =document.getElementById('repos-list');

//Get user list and user information
githubForm.addEventListener('submit', function() {

  event.preventDefault();

  let searchTerm = githubForm.search.value;

  fetch(`https://api.github.com/search/users?q=${searchTerm}`)
  .then(response => response.json())
  .then(function(jsonObj) { 
    
    let userArr = jsonObj.items;
    console.log(userArr);

    //display individual user information
    userArr.forEach(function(user) {

      const userLiTag = document.createElement('li')
      userLiTag.id = "user-li";
      userLiTag.dataset.logIn = `${user.login}`

        userLiTag.innerHTML = `
          <img class = 'avatar' src = ${user.avatar_url} />
          <p> username: ${user.login} </p>
          <a href = ${user.html_url}> Profile Page </a>
          <br/>
        `
      userListUL.append(userLiTag);

      //get repo list

      userLiTag.addEventListener("click", function(event) {

        username = event.currentTarget.dataset.logIn
    
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(function(jsonObj) {
          
          let repoArr = jsonObj;
      
          //Display individual repo information
          repoArr.forEach(function(repo) {
            reposListUL.innerHTML += `
              <li data-id = ${repo.id}>
                <p> Repo name: ${repo.full_name} </p>
                <a href = ${repo.html_url}> Repository URL </a>
                <br/>
              </li> `
          });
        });
      });      
    });
  });
});