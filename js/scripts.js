var pingPong = function(input) {
  if (input % 15 === 0 || input % 5 === 0 || input % 3 === 0)  {
    return true;
  } else{
    return false;
  }
};





$(document).ready(function() {

    $("#click").click(function() {

        $("div.number").empty();

        var num = $("input#num").val();

        for (var start = 1; start <= num; start += 1) {

            if (start % 15 === 0) {
                $("div.number").append("<li>Ping-Pong</li>");

            } else if (start % 3 === 0) {
                $("div.number").append("<li>Ping</li>");

            } else if (start % 5 === 0) {
                $("div.number").append("<li>Pong</li>");


            } else {
                $("div.number").append("<li>" + start + "</li>");

                event.preventDefault();


            }

        }


    })


})
