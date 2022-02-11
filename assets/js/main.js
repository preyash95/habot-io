$(document).ready(function () {
  var selector = $(".varal-nav-link");
  $(selector).on("click", function () {
    $(selector).removeClass("varal-active");
    $(this).addClass("varal-active");
  });

  $(".slides").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
