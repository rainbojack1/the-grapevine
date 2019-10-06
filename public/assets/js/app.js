var thisId;

$(document).on("click", "#leaveNote", function() {
  // Save the id from the p tag
  thisId = $(this).attr("data-id");

  // Make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/api/articles/" + thisId
  })
    .then(function(data) {
      console.log(data);
      // A textarea to the comment modal
      $("#yourComment").replaceWith("<textarea id='bodyinput' name='body' placeholder='Add a comment'></textarea>");
      
      // If there's a comment for the article
      if (data.comment) {
        $("#bodyinput").val(data.comment.body);
      }
    });
});

$(document).on("click", "#saveBtn", function() {
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/api/articles/" + thisId,
    data: {
      body: $("#bodyinput").val()
    }
  })
    .then(function(data) {
      console.log(data);
      $("#yourComment").empty();
    });

  // Empty the textarea
  $("#bodyinput").val("");
});

$(document).on("click", "#closeBtn", function() {
  // Empty the textarea
  $("#bodyinput").val("");
});