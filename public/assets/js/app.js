$(document).on("click", "#leaveNote", function() {
  // Empty the comment from the comments section
  $("#yourComment").empty();
  // Save the id from the p tag
  var thisId = $(this).attr("data-id");

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .then(function(data) {
      console.log(data);
      // The title of the article
      // $("#yourComment").append("<h2>" + data.title + "</h2>");
      // A textarea to add a new note body
      // $("#yourComment").append("<textarea id='bodyinput' name='body'></textarea>");
      // A button to submit a new note, with the id of the article saved to it
      // $("#yourComment").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

      // If there's a comment for the article
      if (data.note) {
        // Place the title of the note in the title input
        $("#titleinput").val(data.note.title);
        // Place the body of the note in the body textarea
        $("#bodyinput").val(data.note.body);
      }
    });
});