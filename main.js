window.addEventListener("load", () => {
  getSearch = () => {
    let searchText = document.getElementById("search").value;
    drinkName = searchText;
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    ).then(function (response) {
      if (response.status !== 200) {
        console.log("problem" + response.status);
      }
      response.json().then(function (data) {
        let searchedDrink = data.drinks;
        for (let i = 0; i < searchedDrink.length; i++) {
          let drinkName = searchedDrink[i].strDrink;
          let drinkIng = searchedDrink[i].strIngredient2;
          let ing0 = searchedDrink[i].strIngredient0;
          let ing1 = searchedDrink[i].strIngredient1;
          let ing2 = searchedDrink[i].strIngredient2;
          let ing3 = searchedDrink[i].strIngredient3;

          createListItem = (text) => {
            let li = document.createElement("li");
            li.textContent = text;
            return li;
          };

          const space = "---------------------";
          //set ui stuff
          const recipe = document.getElementById("recipe");
          recipe.appendChild(createListItem(drinkName));
          recipe.appendChild(createListItem(drinkIng));
          recipe.appendChild(createListItem(ing0));
          recipe.appendChild(createListItem(ing1));
          recipe.appendChild(createListItem(ing2));
          recipe.appendChild(createListItem(ing3));
          recipe.appendChild(createListItem(searchedDrink.strIngredient4));
          recipe.appendChild(createListItem(searchedDrink.strIngredient5));
          recipe.appendChild(createListItem(searchedDrink.strIngredient6));
          recipe.appendChild(createListItem(space));
        }
      });
    });
  };
});
