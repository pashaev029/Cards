$(".card-wrapper")
  .mouseenter(function () {
    $(this).find("svg:first").css("transform", "translateX(-150px)");
    $(this).find("svg:last").css("transform", "translateX(150px)");
    $(this).find(".svgLink").css({
      visibility: "visible",
    });
  })
  .mouseleave(function () {
    $(this).find("svg:first").css("transform", "translateX(0)");
    $(this).find("svg:last").css("transform", "translateX(0)");
    $(this).find(".svgLink ").css({
      visibility: "hidden",
    });
  });

$(document).ready(function () {
  $(".card-wrapper svg").mouseenter(function (e) {
    $(this)
      .parent()
      .find(".svgLink a")
      .text($(e.currentTarget).attr("data-text"))
      .attr("href", $(e.currentTarget).attr("data-url"));
  });
});
