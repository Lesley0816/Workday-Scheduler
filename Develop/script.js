$(function () {

  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);


    function updateTimeBlocks() {
      var currentHour = dayjs().hour();
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }

    updateTimeBlocks();


    function loadSavedEvents() {
      $(".time-block").each(function () {
        var timeBlockId = $(this).attr("id");
        var savedEvent = localStorage.getItem(timeBlockId);
        $(this).find(".description").val(savedEvent);
      });
    }

    loadSavedEvents();

    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  });
}
)