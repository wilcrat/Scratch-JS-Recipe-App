var recipes = document.getElementsByClassName("recipes");
function showCake() {
  for (let i = 0; i < recipes.length; i++) {
    recipes[i].style.display = "none";
  }
  document.getElementById("cake-recipe").style.display = "block";
}
function showRice() {
  for (let i = 0; i < recipes.length; i++) {
    recipes[i].style.display = "none";
  }
  document.getElementById("rice-recipe").style.display = "block";
}
function showFish() {
  for (let i = 0; i < recipes.length; i++) {
    recipes[i].style.display = "none";
  }
  document.getElementById("fish-recipe").style.display = "block";
}
function showUgali() {
  for (let i = 0; i < recipes.length; i++) {
    recipes[i].style.display = "none";
  }
  document.getElementById("ugali-recipe").style.display = "block";
}
function showMeat() {
  for (let i = 0; i < recipes.length; i++) {
    recipes[i].style.display = "none";
  }
  document.getElementById("meat-recipe").style.display = "block";
}
function showKales() {
  for (let i = 0; i < recipes.length; i++) {
    recipes[i].style.display = "none";
  }
  document.getElementById("kales-recipe").style.display = "block";
}
