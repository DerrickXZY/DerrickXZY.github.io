// $(document).ready(function() {
//   $("#sidebar-button").click(function() {
//     if ($(".sidebar-container").hasClass("sidebar-active")) {
//       $("body").removeClass("no-scroll");
//       $("#sidebar-button").removeClass("button-active");
//       $(".sidebar-container").removeClass("sidebar-active");
//       $(".page-wrapper").removeClass("wrapper-active");
//     } else {
//       $("#sidebar-button").addClass("button-active");
//       $(".sidebar-container").addClass("sidebar-active");
//       $(".page-wrapper").addClass("wrapper-active");
//       setTimeout(function() {
//           $("body").addClass('no-scroll');
//               }, 300);
//     }
//   })
// })
$(document).ready(function() {
// all your jQuery code goes in here!
  $("#lightbox").css("display", "none");
  $("#lightbox").hide();


  $(".life-pic").click(function() {
    let imageURL = $(this).children().attr("src");
    $("#image").attr("src", imageURL);
    $("#lightbox").show();
  });

  $("#close").click(function() {
    $("#lightbox").hide();
  });

  $("#close").css("cursor", "pointer");

  $("#overlay").click(function() {
    $("#lightbox").hide();
  });

  let last_selected_button = "#orange";


  $(".button").click(function() {

      $(last_selected_button).removeClass("active");
      $(last_selected_button).addClass("inactive");


      /* YOUR CODE HERE - start */
      last_selected_button = "#" + $(this).attr("id");
      /* YOUR CODE HERE - end */

      $(last_selected_button).removeClass("inactive");
      $(last_selected_button).addClass("active");

      $("#overlay").css("background", $(last_selected_button).css("background"));
      $(".item").css("background", $(last_selected_button).css("background"));
  })

});
