var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

    $(".crystals").empty();

    var images = ["assets/images/crystal_1.jpg",
        "assets/images/crystal_2.jpg",
        "assets/images/crystal_3.jpg",
        "assets/images/crystal_4.jpg"]

    randomResult = Math.floor(Math.random() * 101) + 19;

    $("#result").html("Random Result:  " + randomResult);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
            "background-image": "url(" + images[i] + ")",
            "background-size": "cover"
        });


        $(".crystals").append(crystal);

    }

    $("#totalScore").html("Total Score: " + previous)

}

resetAndStart();

$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#totalScore").html("Total Score: " + previous)

    if (previous > randomResult) {
        lost++;
        $("#lost ").html("Lost: " + lost);
        previous = 0;
        resetAndStart();
    }

    else if (previous === randomResult) {
        win++;

        $("#win").html("Wins: " + win);
        previous = 0;
        resetAndStart();
    }

    console.log(previous);


});
