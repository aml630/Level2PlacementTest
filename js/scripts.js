var pingPong = function(input) {
    if (input % 15 === 0 || input % 5 === 0 || input % 3 === 0) {
        return true;
    } else {
        return false;
    }
};




$(document).ready(function() {

    $("#click").click(function() {

        $("div.number").empty();

        var myNum = $("input#num").val();

        for (var theStart = 1; theStart <= myNum; theStart += 1) {

            if (theStart % 15 === 0) {
                $("div.number").append("<li>Ping-Pong</li>");

            } else if (theStart % 3 === 0) {
                $("div.number").append("<li>Ping</li>");

            } else if (theStart % 5 === 0) {
                $("div.number").append("<li>Pong</li>");


            } else {
                $("div.number").append("<li>" + theStart + "</li>");

                event.preventDefault();


            }

        }


    })


})
