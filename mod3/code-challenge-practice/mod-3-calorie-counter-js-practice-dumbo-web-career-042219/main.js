// your code here, it may be worth it to ensure this file only runs AFTER the dom has loaded.

// * Remove boiler-plate `<li>` tags

// const caloriesListUlTag = document.getElementById('calories-list');

fetch('http://localhost:3000/api/v1/calorie_entries')
.then(response => response.json())
.then(displayAllEntries)

function displayAllEntries(entries) {
  
  const caloriesListUlTag = document.getElementById('calories-list');

  entries.forEach(entry => {

    caloriesListUlTag.innerHTML += `
      <li class="calories-list-item">
        <div class="uk-grid">
          <div class="uk-width-1-6">
            <strong>${entry.calorie}</strong>
            <span>kcal</span>
          </div>

          <div class="uk-width-4-5">
            <em class="uk-text-meta">${entry.note}</em>
          </div>
        </div>

        <div class="list-item-menu">
          <a class="edit-button" uk-icon="icon: pencil" uk-toggle="target: #edit-form-container"></a>
          <a class="delete-button" uk-icon="icon: trash"></a>
        </div>
    </li>
    `
    // let listItemLiTag = document.createElement('li');

    // listItemLiTag.classList.add("calories-list-item");
    // listItemLiTag.innerHTML = `
    //   <div class="uk-grid">
        
    //     <div class="uk-width-1-6">
    //         <strong>${entry.calorie}</strong>
    //         <span>kcal</span>
    //       </div>

    //     <div class="uk-width-4-5">
    //       <em class="uk-text-meta">${entry.note}</em>
    //     </div>

    //   </div>

    //   <div class="list-item-menu">
    //     <a class="edit-button" uk-icon="icon: pencil" uk-toggle="target: #edit-form-container">edit</a>
    //     <a class="delete-button" uk-icon="icon: trash">trash</a>
    //   </div>

    // `
    // caloriesListUlTag = caloriesListUlTag.append(listItemLiTag);
    // caloriesListUlTag.innerHTML += listItemLiTag.innerHTML;
  });

  // return caloriesListUlTag;
}