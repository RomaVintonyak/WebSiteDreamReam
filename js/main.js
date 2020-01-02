$(function () {
  /*counter for index page*/
  var time = 10;
  $(".content__colum").each(function () {
    $("p").each(function () {
      var i = 1,
        num = $(this).data("num"),
        step = (1000 * time) / num,
        that = $(this),
        int = setInterval(function () {
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
  burgerBut.on("click", function (event) {
    event.preventDefault();
    $(".bubger__icon").toggleClass("animate__burger");
    $(".nav__list").toggleClass("nav__list-mobile");
    /*to nav menu toggle class*/
    $(".nav__menu").toggleClass("nav__menu--h");
  });
  /*hover for galery*/
  var hoverImg = $(".img__content");
  hoverImg.hover(function () {
    hoverImg.toggleClass("zoomIn");
  });
  /*form validation*/
  var sendBtn = $("#dataSend");
  sendBtn.on("click", function () {
    var user = $("#user__name").val();
    var mail = $("#user__email").val();
    var mesage = $("#user__text").val();
    if (user.length < 4) {
      $("#erorMesag").text("Введіть імя (не менше 4 символів)");
      $("#user__name").addClass("input__red");
      return false;
    } else if (mail == "") {
      $("#erorMesag").text("Введіть email");
      $("#user__name").removeClass("input__red");
      $("#user__name").addClass("input__green");
      $("#user__email").addClass("input__red");
      return false;
    } else if (mesage == "") {
      $("#erorMesag").text("Напишіть повідомлення");
      $("#user__email").removeClass("input__red");
      $("#user__email").addClass("input__green");
      $("#user__text").addClass("input__green");
      return false;
    }
    $("#erorMesag").text("");
    $.ajax({
      url: '../php/mail.php',
      type: 'POST',
      cache: false,
      data: { 'name': name, 'mail': mail, 'phone': phone, 'mesag': mesag },
      dataType: 'html',
      beforeSend: function () {
        sendBtn.prop("disabled", true);
      },
      success: function (data) {
        if (!data)
          alert("Повідомлення не відправлено, заповніть коректно усі поля");
        else
          alert("Дякуємо за Ваше звернення");
        sendBtn.trigger("reset");
        sendBtn.prop("disabled", false);
      }
    });
  });
  /*slick slider https://kenwheeler.github.io/slick/*/
  var workSlider = $("[data-slider]");
  workSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });
  $(".slider__prev").on("click", function () {
    var currentSlider = $(this)
      .parents(".project__galery")
      .find('[data-slider="slider-galery"]');
    currentSlider.slick("slickPrev");
  });
  $(".slider__next").on("click", function () {
    var currentSlider = $(this)
      .parents(".project__galery")
      .find('[data-slider="slider-galery"]');
    currentSlider.slick("slickNext");
  });
});
