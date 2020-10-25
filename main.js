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
    return createListItem(setValue(val, val1));
  };

  for (let i = 0; i < picClick.length; i++) {
    picClick[i].addEventListener("click", () => {
      clearSearch();
      fetchData((urlParam = picClick[i].textContent));
    });
  };

  const searchInput = document.querySelector("#search");

  searchInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 8) {
      clearSearch()
    }
  });

  searchInput.addEventListener("click", () => {
    clearSearch();
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      getSearch()
    }
  });

  getSearch = () => {
    fetchData((urlParam = document.getElementById("search").value));
  };

  clearSearch = () => {
    let recipe = document.getElementById("recipe");
    recipe.innerHTML = "";
    let searchText = document.getElementById("search");
    searchText.value = "";
  };

  document.getElementById("clear").addEventListener("click", () => {
    clearSearch();
  });

  setUiData = (text) => {
    recipe.appendChild(displayData(text.strDrink, null));
    recipe.appendChild(document.createElement("br"));
    recipe.appendChild(displayData(text.strIngredient1, text.strMeasure1));
    recipe.appendChild(displayData(text.strIngredient2, text.strMeasure2));
    recipe.appendChild(displayData(text.strIngredient3, text.strMeasure3));
    recipe.appendChild(displayData(text.strIngredient4, text.strMeasure4));
    recipe.appendChild(displayData(text.strIngredient5, text.strMeasure5));
    recipe.appendChild(displayData(text.strIngredient6, text.strMeasure6));
    recipe.appendChild(displayData(text.strIngredient7, text.strMeasure7));
    recipe.appendChild(displayData(text.strIngredient8, text.strMeasure8));
    recipe.appendChild(displayData(text.strIngredient9, text.strMeasure9));
    recipe.appendChild(displayData(text.strIngredient10, text.strMeasure10));
    recipe.appendChild(displayData(text.strIngredient11, text.strMeasure11));
    recipe.appendChild(displayData(text.strIngredient12, text.strMeasure12));
    recipe.appendChild(displayData(text.strIngredient13, text.strMeasure13));
    recipe.appendChild(displayData(text.strIngredient14, text.strMeasure14));
    recipe.appendChild(displayData(text.strIngredient15, text.strMeasure15));
    let div = document.createElement("div");
    div.setAttribute("class", "instructions");
    div.textContent = text.strInstructions;
    div.style.display = "none";
    recipe.addEventListener("click", () => {
      div.style.display = "block";
    });
    recipe.appendChild(div);
  };

  document.getElementById("random").addEventListener("click", () => {
    clearSearch();
    fetch(randomURL).then((response) => {
      response.json().then((data) => {
        data = data.drinks[0];
        console.log(data);
        setUiData(data);
      });
    });
  });

  fetchData = (urlParam) => {
    fetch(`${searchURL}${urlParam}`).then((response) => {
      response.json().then((data) => {
        const recipe = document.getElementById("recipe");
        for (let i = 0; i < data.drinks.length; i++) {
          setUiData(data.drinks[i]);
          recipe.appendChild(document.createElement("br"));
          recipe.appendChild(document.createElement("br"));
        }
      });
    });
  };
});
