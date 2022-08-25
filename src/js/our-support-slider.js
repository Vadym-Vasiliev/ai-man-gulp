import $ from "jquery";
import "slick-carousel";

$(".our-support-list-carousel").slick({
  variableWidth: true,
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {},
    },
    {
      breakpoint: 480,
      settings: {},
    },
  ],
});
