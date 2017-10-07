$(document).ready(function () {
    $("#click").click(function () {
        $('html, body').animate({
            scrollTop: $("#square").offset().top
        }, 2000);
    })
})

$(document).ready(function () {
    $("#clicktwo").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 2000);
    })
})

$(document).ready(function () {
    $("#clickthree").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    })
})

$("#box1").hover(function () {
    $("#por1").css("display", "block");
}, function () {
    $("#por1").css("display", "none");
});

$("#box2").hover(function () {
    $("#por2").css("display", "block");
}, function () {
    $("#por2").css("display", "none");
});

$("#box3").hover(function () {
    $("#por3").css("display", "block");
}, function () {
    $("#por3").css("display", "none");
});

$("#box4").hover(function () {
    $("#por4").css("display", "block");
}, function () {
    $("#por4").css("display", "none");
});

$("#box5").hover(function () {
    $("#por5").css("display", "block");
}, function () {
    $("#por5").css("display", "none");
});

$("#box6").hover(function () {
    $("#por6").css("display", "block");
}, function () {
    $("#por6").css("display", "none");
});
