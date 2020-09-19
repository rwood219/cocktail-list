window.addEventListener("load", () => {
  getSearch = () => {
    //drinkName = "martini";
    let searchText = document.getElementById("search").value;
    drinkName = searchText;

    createListItem = (text) => {
      let li = document.createElement("li");
      li.textContent = text;
      return li;
    };
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
        console.log(searchedDrink[0].strInstructions);

        //ingrediant vars
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
          //set ui stuff
          const recipe = document.getElementById("recipe");
          recipe.appendChild(createListItem(drinkName));
          recipe.appendChild(createListItem(ing1 + " " + msr1));
          recipe.appendChild(createListItem(ing2 + " " + msr2));
          recipe.appendChild(createListItem(ing3 + " " + msr3));
          recipe.appendChild(createListItem(ing4  + " " + msr4));
          recipe.appendChild(createListItem(ing5 + " " + msr5));
          //recipe.appendChild(document.createElement('button'))
          recipe.appendChild(document.createElement("br"));
        }
      });
    });
  }
  /* comment out for to enable click search *///;
   //out of click function
 
  document.getElementById("clear").addEventListener("click", () => {
    let recipe = document.getElementById("recipe");
    recipe.innerHTML = "";
    let search = document.getElementById('search');
    search.innerHTML = "";
  });

 });
// need function to loop api and only return if value !== null
/*    console.log(searchedDrink[0].constructor("^strIngredient$", "gi")); */
