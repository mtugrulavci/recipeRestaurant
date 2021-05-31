var restBtn = document.querySelector(".restBtn");
var recipeBtn = document.querySelector(".recipeBtn");
var btnContainer =document.querySelector(".btnContainer");
var containerRest = document.querySelector(".containerRest"); 
var searchRest = document.querySelector(".searchRest"); 
var containerRecipe = document.querySelector(".containerRecipe")
var searchRecipe = document.querySelector(".searchRecipe"); 

function hideRestaurants(){
    btnContainer.classList.add("hide");
    containerRest.classList.add("show");
}
function hideRecipe(){
    btnContainer.classList.add("hide");
    containerRecipe.classList.add("show");
}

function bringRestaurants(){
    var apiKey = "77b4c1d8-deba-4157-a707-5c0d63e2d0a7"
    geoUrl = 'https://ipfind.co/me?auth=' + apiKey
    fetch(geoUrl).then(function(response) {
      // request was successful
      if (response.ok) {
          response.json().then(function(data) {
              console.log(data);
             // p.innerHTML = data.longitude
             var id = "8288af20";
             var key = "e13b76e5858a79ab9d586980b305da5a";
             var lon = data.longitude;
             var lat = data.latitude;
             var searchTerm = document.querySelector("#rest").value;
             var distance = document.querySelector("#dist").value;
             var health = document.querySelector('#health').value;
            if (health){
             var apiUrlRest = `https://api.edamam.com/api/menu-items/v2/search?q=${searchTerm}&lat=${lat}&lon=${lon}&dist=${distance}&health=${health}&app_id=${id}&app_key=${key}`
            }else{
                var apiUrlRest = `https://api.edamam.com/api/menu-items/v2/search?q=${searchTerm}&lat=${lat}&lon=${lon}&dist=${distance}&app_id=${id}&app_key=${key}`
            }
             // nested api
            return fetch(apiUrlRest);
             }).then(function(response) {
               return response.json();
             }).then(function(rest){
               console.log(rest)

            });
          } else {
            alert("Error: " + response.statusText);
          }
        });

}

function bringRecipe(recSearch){
  var recSearch = document.querySelector("#recipe").value;
  var recipeApiKey = "5833503478a5c1d972dd59f1df3396f0"
  var recipeId = "ec473133"
  apiRecipe = `https://api.edamam.com/search?app_id=${recipeId}&app_key=${recipeApiKey}&q=${recSearch}`;
  fetch(apiRecipe).then(function(response) {
    // request was successful
    if (response.ok) {
        response.json().then(function(data) {
            console.log(data);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      });

}

restBtn.addEventListener("click", hideRestaurants);
recipeBtn.addEventListener("click", hideRecipe);
searchRest.addEventListener("click", bringRestaurants);
searchRecipe.addEventListener("click", bringRecipe);