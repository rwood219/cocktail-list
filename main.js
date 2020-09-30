window.addEventListener("load", () => {
  const randomURL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  const picClick = document.querySelector(".thumb-nail-images").children;

  createListItem = (text) => {
    let li = document.createElement("li");
    li.textContent = text;
    return li;
  };

  setValue = (val1, val2) => {
    val1 == null ? (val1 = "") : (val1 = val1);
    val2 == null ? (val2 = "") : (val2 = val2);
    return val1 + " " + val2;
  };

  for (let i = 0; i < picClick.length; i++) {
    picClick[i].addEventListener("click", () => {
      fetchData((urlParam = picClick[i].textContent));
    });
  }

  getSearch = () => {
    fetchData((urlParam = document.getElementById("search").value));
  };

  //CLEARS SEARCH RESULTS & search bar text
  document.getElementById("clear").addEventListener("click", () => {
    let recipe = document.getElementById("recipe");
    recipe.innerHTML = "";
    let searchText = document.getElementById("search");
    searchText.value = "";
  });

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
              setValue(
                currrentDrinkSearch.strIngredient1,
                currrentDrinkSearch.strMeasure1
              )
            )
          );

          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient2,
                currrentDrinkSearch.strMeasure2
              )
            )
          );

          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient3,
                currrentDrinkSearch.strMeasure3
              )
            )
          );

          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient4,
                currrentDrinkSearch.strMeasure4
              )
            )
          );

          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient5,
                currrentDrinkSearch.strMeasure5
              )
            )
          );

          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient6,
                currrentDrinkSearch.strMeasure6
              )
            )
          );
          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient7,
                currrentDrinkSearch.strMeasure7
              )
            )
          );
          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient8,
                currrentDrinkSearch.strMeasure8
              )
            )
          );
          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient9,
                currrentDrinkSearch.strMeasure9
              )
            )
          );
          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient10,
                currrentDrinkSearch.strMeasure10
              )
            )
          );
          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredien11,
                currrentDrinkSearch.strMeasure11
              )
            )
          );
          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient12,
                currrentDrinkSearch.strMeasure12
              )
            )
          );
          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient13,
                currrentDrinkSearch.strMeasure13
              )
            )
          );
          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient14,
                currrentDrinkSearch.strMeasure14
              )
            )
          );
          recipe.appendChild(
            createListItem(
              setValue(
                currrentDrinkSearch.strIngredient15,
                currrentDrinkSearch.strMeasure15
              )
            )
          );
          recipe.appendChild(document.createElement("br"));

          let div = document.createElement("div");

          div.setAttribute("class", "instructions");

          div.textContent = currrentDrinkSearch.strInstructions;

          instBtn = document.getElementById("inst");

          div.style.display = "none";

          instBtn.addEventListener("click", () => {
            div.style.display = "block";
            console.log("sorta working");
          });

          recipe.appendChild(div);
          recipe.appendChild(document.createElement("br"));
          recipe.appendChild(document.createElement("br"));
        }
      });
    });
  };
});
