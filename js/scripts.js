$(document).ready(function(){
  $("#grocery-form").submit(function(event){
    event.preventDefault();
    const groceryList = $("#groceries").val();

    if(groceryList) {
      $("#grocery-form").toggle();
      $("#display-items").toggle();
      const groceryArray = groceryList.toUpperCase().split(", ").sort();
      groceryArray.forEach(function(item) {
        $("#list-items").append("<li>" + item + "</li>");
      });
    } else {
      alert("Please enter some items to your grocery list.")
    }

  });
});