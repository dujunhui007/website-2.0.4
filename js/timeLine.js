$(document).ready(function () {
  var urlZh = "timeData/timeLine-zh.json", urlEn = "timeData/timeLine-en.json", pageNumber = 1;

  function getInfo() {
    $.ajax({
      url: urlZh,
      type: "GET",
      dataType: "json",
      async: false,
      success: function (data) {
        var currentPageArr;
        data.reverse();
        // console.log(data);
        $(".timeLineContainer .timeContent #timeContentContainer").empty();
        currentPageArr = data.slice((pageNumber - 1), (pageNumber + 4));

        // console.log(currentPageArr);
        // var result = currentPageArr;
        var ulStr = "";


        $.each(currentPageArr, function (i, result) {
          var particularData=result.particular;
          ulStr += "        <li class=\"incidentContainer\">\n" +
            "                <div class=\"timeContentLeft\">\n" +
            "                    <h3>" + result.year + "</h3>\n" +
            "                    <p>" + result.monthDay + "</p>\n" +
            "                    <i class=\"hideIncident\"></i>\n" +
            "                    <span class=\"leftLine\"></span>\n" +
            "                </div>\n" +
            "                <div class=\"timeContentRight\">\n" +
            "                    <div class=\"timeRightTitle\">\n" +
            "                        <h4>" + result.title + "</h4>\n" +
            "                    </div>\n" +
            "                    <div class=\"timeContentIncident\">\n" +
            "                        <ul class=\"particulars\">\n" +
            "                        </ul>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </li>";


          // console.log(particularData);
          // $(".timeLineContainer .timeContent .timeContentRight .timeContentIncident ul.particulars").empty();
          $.each(particularData,function (j,particularResult) {
            console.log(particularResult);
            var particularStr = "";
            particularStr +=" <li><p>" + particularResult+ "</p></li>";

            $(".timeLineContainer .timeContent .timeContentRight .timeContentIncident ul.particulars").append(particularStr)
          });




          // for (var j = 0; j < result.particular.length; j++) {
          //   var obj = result.particular[j];
          //   console.log(obj);
          //
          //   particularStr += "   <li>\n" +
          //     "                               <p>" + obj + "</p>\n" +
          //     "                            </li>";
          //   return particularStr;
          //   console.log(particularStr);
          // }
          //
          // $(".timeLineContainer .timeContent .timeContentRight .timeContentIncident ul.particulars").append(particularStr)

          // $.each(result.particular, function (particularResult) {
          //   console.log(particularResult);
          //   // for (particularKay in particularResult) {
          //   //   console.log(particularResult);
          //   //
          //   // }


          //   particularStr += " <li>\n" +
          //     "                                <p>particularResult</p>\n" +
          //     "                            </li>"
          // })


        });
        // console.log(ulStr);

        $("#timeContentContainer").append(ulStr);
        // $(".more-table-tbody").append(tableStr)
      },
      error: function () {
        alert("数据请求失败，请重新打开")
      }
    });
  }

  getInfo();


  function getLeftLineHeight() {

    $(".timeLineContainer .timeContent .timeContentLeft .leftLine").each(function () {

      $(this).css("height", ($(this).parent().parent().find(".timeContentIncident").height() + 90));
    });
    $(".timeLineContainer .incidentContainer:last").find(".leftLine").css("height", "0")
  }

  getLeftLineHeight();


  $(".timeLineContainer .timeContent ul li.incidentContainer .timeContentLeft .hideIncident").click(function () {
    $(this).parent().parent().find(".timeContentIncident").slideToggle();
    $(this).parent().find(".leftLine").slideToggle();
  })
});
