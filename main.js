window.addEventListener("load", () => {
  const randomURL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  const picClick = document.querySelector(".thumb-nail-images").children;

  createListItem = (text) => {
    let li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", () => {
      console.log("clicked");
    });
    return li;
  };

  //ADD CLICK LISTENER TO PIC ELEMENTS AND SET fetch param
  for (let i = 0; i < picClick.length; i++) {
    picClick[i].addEventListener("click", () => {
      fetchData((urlParam = picClick[i].textContent));
    });
  };

  getSearch = () => {
    fetchData((urlParam = document.getElementById("search").value));
  };

  fetchData = (urlParam) => {
    fetch(`${searchURL}${urlParam}`).then(function (response) {
      response.json().then(function (data) {
        const recipe = document.getElementById("recipe");
        console.log(data.drinks);

        for (let i = 0; i < data.drinks.length; i++) {
          let currrentDrinkSearch = data.drinks[i];
          const ing1 = currrentDrinkSearch.strIngredient1;
          const ing2 = currrentDrinkSearch.strIngredient2;

          let ing3 = currrentDrinkSearch.strIngredient3;
          ing3 === null ? (ing3 = "") : (ing3 = ing3);
          let ing4 = currrentDrinkSearch.strIngredient4;
          ing4 == null ? (ing4 = "") : (ing4 = ing4);
          let ing5 = currrentDrinkSearch.strIngredient5;
          ing5 == null ? (ing5 = "") : (ing5 = ing5);
          let ing6 = currrentDrinkSearch.strIngredient6;
          ing6 == null ? (ing6 = "") : (ing6 = ing6);
          let ing7 = currrentDrinkSearch.strIngredient7;
          ing7 == null ? (ing7 = "") : (ing7 = ing7);
          let ing8 = currrentDrinkSearch.strIngredient8;
          ing8 == null ? (ing8 = "") : (ing8 = ing8);
          let ing9 = currrentDrinkSearch.strIngredient9;
          ing9 == null ? (ing9 = "") : (ing9 = ing9);
          let ing10 = currrentDrinkSearch.strIngredient10;
          ing10 == null ? (ing10 = "") : (ing10 = ing10);
          let ing11 = currrentDrinkSearch.strIngredient11;
          ing11 == null ? (ing11 = "") : (ing11 = ing11);
          let ing13 = currrentDrinkSearch.strIngredient13;
          ing13 == null ? (ing13 = "") : (ing13 = ing13);
          let ing14 = currrentDrinkSearch.strIngredient14;
          ing14 == null ? (ing14 = "") : (ing14 = ing14);

          //Measure vars
          let msr1 = currrentDrinkSearch.strMeasure1;
          msr1 == null ? (msr1 = "") : (msr1 = msr1);
          let msr2 = currrentDrinkSearch.strMeasure2;
          msr2 == null ? (msr2 = "") : (msr2 = msr2);
          let msr3 = currrentDrinkSearch.strMeasure3;
          msr3 == null ? (msr3 = "") : (msr3 = msr3);
          let msr4 = currrentDrinkSearch.strMeasure4;
          msr4 == null ? (msr4 = "") : (msr4 = msr4);
          let msr5 = currrentDrinkSearch.strMeasure5;
          msr5 == null ? (msr5 = "") : (msr5 = msr5);
          let msr6 = currrentDrinkSearch.strMeasure6;
          msr6 == null ? (msr6 = "") : (msr6 = msr6);
          let msr7 = currrentDrinkSearch.strMeasure7;
          msr7 == null ? (msr7 = "") : (msr7 = msr7);
          let msr8 = currrentDrinkSearch.strMeasure8;
          msr8 == null ? (msr8 = "") : (msr8 = msr8);
          let msr9 = currrentDrinkSearch.strMeasure9;
          msr9 == null ? (msr9 = "") : (msr9 = msr9);
          let msr10 = currrentDrinkSearch.strMeasure10;
          msr10 == null ? (msr10 = "") : (msr10 = msr10);

          recipe.appendChild(createListItem(currrentDrinkSearch.strDrink));
          recipe.appendChild(document.createElement("br"));
          recipe.appendChild(createListItem(msr1 + " " + ing1));
          recipe.appendChild(createListItem(msr2 + " " + ing2));
          recipe.appendChild(createListItem(msr3 + " " + ing3));
          recipe.appendChild(createListItem(msr4 + " " + ing4));
          recipe.appendChild(createListItem(msr5 + " " + ing5));
          recipe.appendChild(createListItem(msr6 + " " + ing6));
          recipe.appendChild(createListItem(msr7 + " " + ing7));
          recipe.appendChild(createListItem(msr8 + " " + ing8));
          recipe.appendChild(createListItem(msr9 + " " + ing9));
          recipe.appendChild(createListItem(msr10 + " " + ing10));
          recipe.appendChild(document.createElement("br"));
          recipe.appendChild(document.createElement("br"));
        }
      });
    });
  };

  //CLEARS SEARCH RESULTS
  document.getElementById("clear").addEventListener("click", () => {
    let recipe = document.getElementById("recipe");
    recipe.innerHTML = "";
    let search = document.getElementById("search");
    search.innerHTML = "";
  });
});
