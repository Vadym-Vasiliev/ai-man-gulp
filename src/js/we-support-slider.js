import $ from "jquery";
import "slick-carousel";

$(".we-support-list-carousel").slick({
  variableWidth: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {},
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
