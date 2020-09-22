window.addEventListener("load", () => {
  const recipe = document.getElementById("recipe");
  const randomURL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const searchURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  const displayRandomDrink = document.querySelector("#suggestions");
  const randomInstructionText = document.querySelector("#instruction-text");
  let clearInstructions = document.querySelector("#instruction-text");
  let searchTxt = document.querySelector(".thumb-nail-images").children;

  createListItem = (text) => {
    let li = document.createElement("li");
    li.textContent = text;
    return li;
  };
  let changeReq = () => {};

  //==============SEARCH BAR SECTION=========
  getSearch = () => {
    //drinkName = "martini";
    let searchText = document.getElementById("search").value;
    let drinkName = searchText;

    fetch(`${searchURL}${drinkName}`).then(function (response) {
      if (response.status !== 200) {
        console.log("problem" + response.status);
      }
      response.json().then(function (data) {
        console.log(data);
        let searchedDrink = data.drinks;

        for (let i = 0; i < searchedDrink.length; i++) {
          let drinkName = searchedDrink[i].strDrink;
          let ing1 = searchedDrink[i].strIngredient1;
          ing1 === null ? (ing1 = "") : (ing1 = ing1);
          let ing2 = searchedDrink[i].strIngredient2;
          ing2 === null ? (ing2 = "") : (ing2 = ing2);
          let ing3 = searchedDrink[i].strIngredient3;
          ing3 === null ? (ing3 = "") : (ing3 = ing3);
          let ing4 = searchedDrink[i].strIngredient4;
          ing4 === null ? (ing4 = "") : (ing4 = ing4);
          let ing5 = searchedDrink[i].strIngredient5;
          ing5 === null ? (ing5 = "") : (ing5 = ing5);
          //measurments
          let msr1 = searchedDrink[i].strMeasure1;
          let msr2 = searchedDrink[i].strMeasure2;
          msr2 === null ? (msr2 = "") : (msr2 = msr2);
          let msr3 = searchedDrink[i].strMeasure3;
          msr3 === null ? (msr3 = "") : (msr3 = msr3);
          let msr4 = searchedDrink[i].strMeasure4;
          msr4 === null ? (msr4 = "") : (msr3 = msr4);
          let msr5 = searchedDrink[i].strMeasure5;
          msr5 === null ? (msr5 = "") : (msr5 = msr5);
          //set ui elements
          recipe.appendChild(createListItem(drinkName));
          recipe.appendChild(document.createElement("br"));
          recipe.appendChild(createListItem(ing1 + " " + msr1));
          recipe.appendChild(createListItem(ing2 + " " + msr2));
          recipe.appendChild(createListItem(ing3 + " " + msr3));
          recipe.appendChild(createListItem(ing4 + " " + msr4));
          recipe.appendChild(createListItem(ing5 + " " + msr5));
          recipe.appendChild(document.createElement("br"));
          recipe.appendChild(document.createElement("br"));
        }
      });
    });
  };

  //SET UI FOR CURRENT CLICKED DRINK PICTURE
  for (let i = 0; i < searchTxt.length; i++) {
    let text = searchTxt[i].textContent;
    searchTxt[i].addEventListener("click", () => {
      fetch(`${searchURL}${text}`).then(function (response) {
        if (response.status !== 200) {
          console.log("problem" + response.status);
        }

        response.json().then(function (data) {
          let currentDrinkSearch = data.drinks;
          for (let i = 0; i < currentDrinkSearch.length; i++) {
            recipe.appendChild(createListItem(currentDrinkSearch[i].strDrink));
            recipe.appendChild(
              createListItem(currentDrinkSearch[i].strIngredient1)
            );
            recipe.appendChild(
              createListItem(currentDrinkSearch[i].strIngredient2)
            );
            recipe.appendChild(
              createListItem(currentDrinkSearch[i].strIngredient3)
            );
            recipe.appendChild(document.createElement("br"));
          }
        });
      });
    });
  }
  //GET RANDOM RECIPE ON WINDOW LOAD..;featured drink section
  fetch(randomURL).then(function (response) {
    if (response.status !== 200) {
      console.log("problem" + response.status);
    }
    response.json().then(function (data) {
      randomDrinks = data.drinks;

      //TOGGLE RANDOM DRINK INSTRUCTION
      displayRandomDrink.addEventListener("click", () => {
        randomInstructionText.textContent = randomDrinks[0].strInstructions;
      });
      //CLEAR RANDOM DRINK INSTRUCTION CONTENT
      clearInstructions.addEventListener("click", () => {
        randomInstructionText.textContent = "";
      });

      //SET UI INGREDIENTS FOR RANDOM DRINK
      for (let i = 0; i < randomDrinks.length; i++) {
        displayRandomDrink.appendChild(
          createListItem(randomDrinks[i].strDrink)
        );
        displayRandomDrink.appendChild(
          createListItem(randomDrinks[i].strIngredient1)
        );
        displayRandomDrink.appendChild(
          createListItem(randomDrinks[i].strIngredient2)
        );
        displayRandomDrink.appendChild(
          createListItem(randomDrinks[i].strIngredient3)
        );
        displayRandomDrink.appendChild(
          createListItem(randomDrinks[i].strIngredient4)
        );
      }
    });
  });

  //CLEARS SEARCH RESULTS
  document.getElementById("clear").addEventListener("click", () => {
    let recipe = document.getElementById("recipe");
    recipe.innerHTML = "";
    let search = document.getElementById("search");
    search.innerHTML = "";
  });
});
