window.addEventListener("load", () => {
  const randomURL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  const displayRandomDrink = document.querySelector("#suggestions");
  const randomInstructionText = document.querySelector("#instruction-text");
  let clearInstructions = document.querySelector("#instruction-text");
  let picClick = document.querySelector(".thumb-nail-images").children;

  createListItem = (text) => {
    let li = document.createElement("li");
    li.textContent = text;
    return li;
  };

  fetchData = (urlParam) => {
    fetch(`${searchURL}${urlParam}`).then(function (response) {
      response.json().then(function (data) {
        const recipe = document.getElementById("recipe");
        console.log(data.drinks);
        for (let i = 0; i < data.drinks.length; i++) {
          let currrentDrinkSearch = data.drinks[i];
          recipe.appendChild(createListItem(currrentDrinkSearch.strDrink));
          recipe.appendChild(document.createElement("br"));
          recipe.appendChild(
            createListItem(
              currrentDrinkSearch.strMeasure1 +
                " " +
                currrentDrinkSearch.strIngredient1
            )
          );
          recipe.appendChild(document.createElement("br"));
        }
      });
    });
  };

  //ADD CLICK LISTENER TO PIC ELEMENTS AND SET fetch param
  for (let i = 0; i < picClick.length; i++) {
    picClick[i].addEventListener("click", () => {
      fetchData((urlParam = picClick[i].textContent));
    });
  }
});

getSearch = () => {
  fetchData((urlParam = document.getElementById("search").value));
};

//CLEARS SEARCH RESULTS
document.getElementById("clear").addEventListener("click", () => {
  let recipe = document.getElementById("recipe");
  recipe.innerHTML = "";
  let search = document.getElementById("search");
  search.innerHTML = "";
});
