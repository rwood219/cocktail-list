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

/*  for (let i = 0; i < searchedDrink.length; i++) {
          //const searched = searchedDrink[]
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
        }
      };
      // });
      //};

      //GET RANDOM RECIPE ON WINDOW LOAD..;featured drink section
      fetch(randomURL).then(function (response) {
        if (response.status !== 200) {
          console.log("problem" + response.status);
        }
        response.json().then(function (data) {
          randomDrinks = data.drinks;
          console.log(data);

          let {
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strMeasure13,
            strMeasure14,
            strMeasure15,
          } = data.drinks[0];

          //if value === null set to '' else val =val
          console.log(strMeasure8);

          //SET UI INGREDIENTS FOR RANDOM DRINK
          for (let i = 0; i < randomDrinks.length; i++) {
            displayRandomDrink.appendChild(
              createListItem(randomDrinks[i].strDrink)
            );
            displayRandomDrink.appendChild(document.createElement("br"));
            displayRandomDrink.appendChild(
              createListItem(strIngredient1 + " " + strMeasure1)
            );
            displayRandomDrink.appendChild(
              createListItem(strIngredient2 + " " + strMeasure2)
            );
            displayRandomDrink.appendChild(
              createListItem(strIngredient3 + " " + strMeasure3)
            );
            displayRandomDrink.appendChild(
              createListItem(strIngredient4 + " " + strMeasure4)
            );
            displayRandomDrink.appendChild(
              createListItem(strIngredient5 + " " + strMeasure5)
            );
            displayRandomDrink.appendChild(
              createListItem(strIngredient6 + " " + strMeasure6)
            );
            displayRandomDrink.appendChild(
              createListItem(strIngredient7 + " " + strMeasure7)
            );
            strMeasure7 === null
              ? (strMeasure7 = "")
              : (strMeasure7 = strMeasure7);
            displayRandomDrink.appendChild(
              createListItem(strIngredient8 + " " + strMeasure8)
            );
            strMeasure8 === null
              ? (strMeasure8 = "")
              : (strMeasure8 = strMeasure8);

            displayRandomDrink.appendChild(createListItem(strIngredient9));
            displayRandomDrink.appendChild(createListItem(strIngredient10));
            displayRandomDrink.appendChild(createListItem(strIngredient11));
            displayRandomDrink.appendChild(createListItem(strIngredient12));
            displayRandomDrink.appendChild(createListItem(strIngredient13));
            displayRandomDrink.appendChild(createListItem(strIngredient14));
            displayRandomDrink.appendChild(createListItem(strIngredient15));
          }
          //TOGGLE RANDOM DRINK INSTRUCTION
          displayRandomDrink.addEventListener("click", () => {
            randomInstructionText.textContent = randomDrinks[0].strInstructions;
          });
          //CLEAR RANDOM DRINK INSTRUCTION CONTENT
          clearInstructions.addEventListener("click", () => {
            randomInstructionText.textContent = "";
          });
        });
      });

      //CLEARS SEARCH RESULTS
      document.getElementById("clear").addEventListener("click", () => {
        let recipe = document.getElementById("recipe");
        recipe.innerHTML = "";
        let search = document.getElementById("search");
        search.innerHTML = "";
      });
    }}
)
 */

//=================================================
//===========================================

//SET UI FOR CURRENT CLICKED DRINK PICTURE in thumbnail section
/*   for (let i = 0; i < picClick.length; i++) {
    let text = picClick[i].textContent;
    picClick[i].addEventListener("click", () => {
      fetch(`${searchURL}${text}`).then(function (response) {
        if (response.status !== 200) {
          console.log("problem" + response.status);
        }

        response.json().then(function (data) {
          let currentDrinkSearch = data.drinks;
          for (let i = 0; i < currentDrinkSearch.length; i++) {
            recipe.appendChild(createListItem(currentDrinkSearch[i].strDrink));
            recipe.appendChild(document.createElement("br"));
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
  } */

//drinkName = "martini";
/*       let searchText = document.getElementById("search").value;
        let drinkName = searchText;

        fetch(`${searchURL}${drinkName}`).then(function (response) {
          if (response.status !== 200) {
            console.log("problem" + response.status);
          }
          response.json().then(function (data) {
            console.log(data);
            let searchedDrink = data.drinks; */
