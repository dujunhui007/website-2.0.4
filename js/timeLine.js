$(document).ready(function () {
  // var switchFlag = 1;
  //
  // function getLeftLineHeight() {
  //   var leftLineH = $(".timeLineContainer .timeContent .timeContentRight .timeContentIncident").height() + 100;
  //   var lastIncidentH = leftLineH - 100;
  //   $(".timeLineContainer .timeContent ul li.incidentContainer .timeContentLeft .hideIncident").parent().find(".leftLine").css("height", leftLineH);
  //
  //   $(".timeLineContainer .timeContent ul .incidentContainer:last").find(".leftLine").css("height", lastIncidentH)
  // }
  //
  // getLeftLineHeight();

  function getLeftLineHeight() {

    $(".timeLineContainer .timeContent .timeContentLeft .leftLine").each(function () {

      // alert($(this).height());
      // alert($(this).parent().parent().find(".timeContentIncident").height());
      $(this).css("height",$(this).parent().parent().find(".timeContentIncident").height())
    })
  }

  getLeftLineHeight();


  $(".timeLineContainer .timeContent ul li.incidentContainer .timeContentLeft .hideIncident").click(function () {
    $(this).parent().parent().find(".timeContentIncident").slideToggle();
    $(this).parent().find(".leftLine").slideToggle();
    // if (switchFlag) {
    //   $(this).parent().parent().find(".timeContentIncident").slideToggle();
    //   $(this).parent().find(".leftLine").css("height", "100px");
    //   switchFlag = 0;
    // } else {
    //   var leftLine = $(this).parent().parent().find(".timeContentIncident").height() + 150;
    //   var lastIncidentH = leftLine - 250;
    //   // console.log(leftLine);
    //   $(this).parent().parent().find(".timeContentIncident").slideToggle();
    //   $(".timeLineContainer .timeContent ul .incidentContainer:last").find(".leftLine").css("height", lastIncidentH);
    //   $(this).parent().find(".leftLine").css("height", leftLine);
    //   switchFlag = 1;
    // }
  })
});
