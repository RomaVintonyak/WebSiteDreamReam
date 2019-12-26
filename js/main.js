$(function() {
  /*counter for index page*/
  var time = 10;
  $(".content__colum").each(function() {
    $("p").each(function() {
      var i = 1,
        num = $(this).data("num"),
        step = (1000 * time) / num,
        that = $(this),
        int = setInterval(function() {
          if (i <= num) {
            that.html(i);
          } else {
            clearInterval(int);
          }
          i++;
        }, step);
    });
  });
  /*toggle class for burger button */
  var burgerBut = $("#navToggle");
  burgerBut.on("click", function(event){
    event.preventDefault();
    $(".bubger__icon").toggleClass("animate__burger");
    $(".nav__list").toggleClass("nav__list-mobile");
  });
});
