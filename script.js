var money = 10.0;
var cokes = 0;
var chips = 0;

$(".buy").click(function() {
  let bar = $("input").val();
  if (bar === "coke" && money >= 1.5) {
    money = money - 1.5;
    cokes = cokes + 1;
    $(".money").text("I have $" + money);
    $(".message").text("You bought " + cokes + " cokes for 1.50$");
  } else if (bar === "chips" && money >= 1.25) {
    money = money - 1.25;
    chips = chips + 1;
    $(".money").text("I have $" + money);
    $(".message").text("You bought " + chips + " chips for 1.25$");
  } else if (money < 1.25 && (bar === "chips" || bar === "coke")) {
    $(".message").text("you cant buy these items! get a job");
  } else {
    $(".message").text("we dont sell " + bar + ",sorry!");
  }
});

//$(".buy").click(function() {
 // money = $(".mymoney").val();
 // $(".money").text("I have $" + money);
  //console.log(money);
//});
  