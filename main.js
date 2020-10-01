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

  displayData = (val, val1) => {
    createListItem(setValue());
    return createListItem(setValue(val, val1));
  };

  for (let i = 0; i < picClick.length; i++) {
    picClick[i].addEventListener("click", () => {
      fetchData((urlParam = picClick[i].textContent));
    });
  }

  getSearch = () => {
    fetchData((urlParam = document.getElementById("search").value));
  };

  document.getElementById("clear").addEventListener("click", () => {
    let recipe = document.getElementById("recipe");
    recipe.innerHTML = "";
    let searchText = document.getElementById("search");
    searchText.value = "";
  });

  document.getElementById("random").addEventListener("click", () => {
    fetch(randomURL).then((response) => {
      response.json().then((data) => {
        data = data.drinks[0];
        console.log(data);
        let recipe = document.getElementById("recipe");
        recipe.appendChild(displayData(data.strDrink, null));
        recipe.appendChild(displayData(data.strIngredient1, data.strMeasure1));
        recipe.appendChild(displayData(data.strIngredient2, data.strMeasure2));
        recipe.appendChild(displayData(data.strIngredient3, data.strMeasure3));
        recipe.appendChild(displayData(data.strIngredient4, data.strMeasure4));
        recipe.appendChild(displayData(data.strIngredient5, data.strMeasure5));
        recipe.appendChild(displayData(data.strIngredient6, data.strMeasure6));
        recipe.appendChild(displayData(data.strIngredient7, data.strMeasure7));
        recipe.appendChild(displayData(data.strIngredient8, data.strMeasure8));
        recipe.appendChild(displayData(data.strIngredient9, data.strMeasure9));
        recipe.appendChild(
          displayData(data.strIngredient10, data.strMeasure10)
        );
        recipe.appendChild(
          displayData(data.strIngredient11, data.strMeasure11)
        );
        recipe.appendChild(
          displayData(data.strIngredient12, data.strMeasure12)
        );
        recipe.appendChild(
          displayData(data.strIngredient13, data.strMeasure13)
        );
        recipe.appendChild(
          displayData(data.strIngredient14, data.strMeasure14)
        );
        recipe.appendChild(
          displayData(data.strIngredient15, data.strMeasure15)
        );
      });
    });
  });

  fetchData = (urlParam) => {
    fetch(`${searchURL}${urlParam}`).then((response) => {
      response.json().then((data) => {
        const recipe = document.getElementById("recipe");
        console.log(data.drinks);
        for (let i = 0; i < data.drinks.length; i++) {
          let currrentDrinkSearch = data.drinks[i];
          recipe.appendChild(createListItem(currrentDrinkSearch.strDrink));
          recipe.appendChild(document.createElement("br"));
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient1,
              currrentDrinkSearch.strMeasure1
            )
          );

          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient2,
              currrentDrinkSearch.strMeasure2
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient3,
              currrentDrinkSearch.strMeasure3
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient4,
              currrentDrinkSearch.strMeasure4
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient5,
              currrentDrinkSearch.strMeasure5
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient6,
              currrentDrinkSearch.strMeasure6
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient7,
              currrentDrinkSearch.strMeasure7
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient8,
              currrentDrinkSearch.strMeasure8
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient9,
              currrentDrinkSearch.strMeasure9
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient10,
              currrentDrinkSearch.strMeasure10
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient11,
              currrentDrinkSearch.strMeasure11
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient12,
              currrentDrinkSearch.strMeasure12
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient13,
              currrentDrinkSearch.strMeasure13
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient14,
              currrentDrinkSearch.strMeasure14
            )
          );
          recipe.appendChild(
            displayData(
              currrentDrinkSearch.strIngredient15,
              currrentDrinkSearch.strMeasure15
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
