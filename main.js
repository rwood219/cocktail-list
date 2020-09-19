window.addEventListener("load", () => {

  getSearch = () => {
    //drinkName = "rum";
    let searchText = document.getElementById("search").value;
    drinkName = searchText;

    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    ).then(function (response) {
      if (response.status !== 200) {
        console.log("problem" + response.status);
      }
      response.json().then(function (data) {
        console.log(data);
        let searchedDrink = data.drinks;

        let constructor = new RegExp("^strIngredient$", "gi");
        // need function to loop api and only return if value !== null

        console.log(searchedDrink[0].strInstructions);
        for (let i = 0; i < searchedDrink.length; i++) {
          let drinkName = searchedDrink[i].strDrink;
          let ing1 = searchedDrink[i].strIngredient1;
          let ing2 = searchedDrink[i].strIngredient2;
          let ing3 = searchedDrink[i].strIngredient3;
          let msr1 = searchedDrink[i].strMeasure1;
          let msr2 = searchedDrink[i].strMeasure2;
          let msr3 = searchedDrink[i].strMeasure3;

          createListItem = (text) => {
            let li = document.createElement("li");
            li.textContent = text;
            return li;
          };

          const space = "---------------------";
          //set ui stuff
          const recipe = document.getElementById("recipe");
          recipe.appendChild(createListItem(drinkName));
          recipe.appendChild(createListItem(ing1 + " " + msr1));
          recipe.appendChild(createListItem(ing2 + " " + msr2));
          recipe.appendChild(createListItem(ing3 + " " + msr3));
          recipe.appendChild(createListItem(searchedDrink.strIngredient4));
          recipe.appendChild(createListItem(searchedDrink.strIngredient5));
          recipe.appendChild(createListItem(searchedDrink.strIngredient6));
          recipe.appendChild(createListItem(space));
        }
      });
    });
  }; //out of function
  //add this listener to the input box
    document.getElementById('clear').addEventListener('click', ()=> {
        let recipe = document.getElementById('recipe');
        recipe.innerHTML = ''
    });

});
