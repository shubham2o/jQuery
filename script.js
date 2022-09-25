// 1.
// $(document).ready(function() {
//     $("h1").css("color", "red");
// });

// 2.
// $("h1").css("color", "red");

// 3.
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

// 4.
// $("h1").addClass("big-title");
$("h1").addClass("big-title text-shadow");

// 5.
// $("h1").removeClass("big-title");

// 6.
console.log($("h1").hasClass("big-title"));

// 7.
// $("button").text("Don't Click Me");
// $("h1").text("Bye.");

// 8.
// $("button").html("<em>Hey</em>");
$("button").html("<em><strong>Hey</strong></em>");

// 9.
console.log($("img").attr("src"));
$("a").attr("href", "https://www.youtube.com");

// 10.
$("h1").click(function() {
    $("h1").css("color", "violet");
});

// 11.
// for (let i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "tomato";
//     })
// }
$("button").click(function() {
    $("h1").css("color", "tomato");
});

// 12.
// $("input").keypress(function(e) {
//     console.log(e.key);
// });
$(document).keypress(function(e) {
    $("h1").text(e.key);
    console.log(e.key);
});

// 13.
$("h1").on("mouseover", function() {
    $("h1").css("color", "gray");
});

// 14.
$("h1").before("<br><button>Before Button</button>");

// 15.
$("h1").after("<button>After Button</button><br><br>");

// 16.
$("h1").prepend("<button>Prepend Button</button>");

// 17.
$("h1").append("<button>Append Button</button>");

// 18.
// $("button").remove();

// 19.
// $("button").on("click", function() {
//     $("a").hide();
// });

// 20.
// $("input").on("click", function() {
//     $("a").show();
// });

// 21.
$("h1").on("click", function() {
    $("a").toggle();
});

// 22.
// $("button").on("click", function() {
//     $("h1").fadeOut();
// });

// 23.
// $("button").on("click", function() {
//     $("h1").fadeIn();
// });

// 24.
// $("button").on("click", function() {
//     $("h1").fadeToggle();
// });

// 25. 
// $("button").on("click", function() {
//     $("h1").slideUp();
// });

// 26. 
// $("button").on("click", function() {
//     $("h1").slideDown();
// });

// 27. 
// $("button").on("click", function() {
//     $("h1").slideToggle();
// });

// 28. 
// $("button").on("click", function() {
//     $("h1").animate({
//         opacity: 0.5,
//         margin: "20px"
//     });
// });

// 29.
$("button").on("click", function() {
    $("h1")
        .slideUp()
        .slideDown()
        .animate({
            margin: "0px",
            opacity: 0.5
        });
})

// 30. Selects all the elements
// $("*");

// 31.