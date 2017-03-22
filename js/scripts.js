$(function() {
  $("form").submit(function(event) {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var zip = $("#zip").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".address").text(address);
    $(".city").text(city);
    $(".zip").text(zip);

    event.preventDefault();

    $(".receipt").show();
  });

  $("#click").click(function() {
    $("#coupon").fadeToggle();
  });
});
