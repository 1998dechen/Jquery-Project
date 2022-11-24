// calling a function to hide the p tag
// click and dblclick event

$(document).ready(function() {
    $("#hide").click(function() {
        $("p").hide();
    });
    $("#show").dblclick(function() {
        $("p").show();
    });
});

// calling a function to us a fadeIn effects
$(document).ready(function() {
    $("button").click(function() {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");

    });
});

$(document).ready(function() {
    $("#fadeIn").mouseleave(function() {
        alert("BYE BYE!")
    });
});


//calling a function to slideup the content: 
$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideUp("slow");
        $("#panel").slideToogle();
    });
});

// calling a function to animate the image

$(document).ready(function() {
    $("button").click(function() {
        $("#animation").animate({
            left: '400px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});

//calling a function to animate a image 
$(document).ready(function() {
    $("#Ani").click(function() {
        var div = $("#image");
        div.animate({
            height: '300px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '300px',
            opacity: '0.8'
        }, "slow");
        div.animate({
            height: '100px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '100px',
            opacity: '0.8'
        }, "slow");

    })
})

//creating a form in jquery
$(document).ready(function() {
    $("input").focus(function() {
        $(this).css("background-color", "palegreen");
    });
    $("input").blur(function() {
        $(this).css("background-color", "pink");
    });
});

//calling a function using various events
$(document).ready(function() {
    $("#events").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function() {
            $(this).css("background-color", "palegreen");
        },
        click: function() {
            $(this).css("background-color", "yellow");
        }
    });
});

//calling a function to stop sliding
$(document).ready(function() {
    $("#flip1").click(function() {
        $("#panel1").slideDown(5000);
    });
    $("#stop").click(function() {
        $("#panel1").stop();
    });
});

//calling a function to callback or hide the content

$(document).ready(function() {
    $("#Hide").click(function() {
        $("#callbackP").hide("slow", function() {
            alert("This paragraph is now hidden");
        });
    });
});

// calling a function to chain the content: 
$(document).ready(function() {
    $("#Chaining").click(function() {
        $("#p2").css("color", "red").slideUp(2000).slideDown(2000);
    });
});

//calling a function to show the text and the html text.
$(document).ready(function() {
    $("#btn1").click(function() {
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function() {
        alert("HTML: " + $("#test").html());
    });
});

// calling function to set text, html and value

$(document).ready(function(){
    $("#btn3").click(function(){
        $("#test1").text("Hello World!");
    });
    $("#btn4").click(function(){
        $("#test2").html("<b> Hello World! </b>");
    });
    $("#btn5").click(function(){
        $("#test3").val("Dolly Duck");
    });
});

// calling function to append text

function appendText(){
    var txt1 = "<p> Welcome to jquery. <p/>"; // Create text with HTML
    var txt2 = $("<p></p>").text("Welcome to jquery.");
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Welcome to jquery.";
    $("#append").append(txt1, txt2, txt3);  // Append new elements
}


// calling a function to insert text before and after.
$(document).ready(function(){
    $("#but1").click(function(){
        $("#img").before("<b>Badminton <b/>");
    });
    
    $("#but2").click(function(){
        $("#img").after("<b> is a game that i enjoy playing a lot.</b>");
    });
});


// calling a function to remove the div
$(document).ready(function(){
    $("#rm").click(function(){
        $("#remove").remove();
    });
});

// calling a function to add a class
$(document).ready(function(){
    $("#addcls").click(function(){
        $("h1,p").addClass("blue");
        // $("h1,p").removeClass("blue");
    $("#addclass").addClass("important");
});
});

// calling a function to set a multiple css property

$(document).ready(function(){
    $("#btnp").click(function(){
        $("#p1, #p2, #p3").css({
            "background-color": "palegreen", "font-size":"100%", "border":"1px solid black"
        });
    });
});

// calling a function to give a dimension to the div


$(document).ready(function(){
   $("#displaybtn").click(function(){
    var txt = ""; 
    txt += "Width of div: " + $("#divv").width() + "</br>";
    txt += "Height of div: " + $("#divv").height() + "</br>";
    txt += "Inner width of div: " + $("#divv").innerWidth() + "</br>";
    txt += "Inner height of div: " + $("#divv").innerHeight();
    $("#divv").html(txt);
   });
});

