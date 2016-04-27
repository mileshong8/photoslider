var imageList = ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg", "http://vignette3.wikia.nocookie.net/starwars/images/2/24/EPII_AotC_poster.png/revision/latest?cb=20130822173923", "http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX640_SY720_.jpg", "http://www.family-flix.com/wp-content/uploads/2015/06/star-wars-episode-4-a-new-hope.jpg", "http://moviewallpaperpics.com/wp-content/uploads/2015/04/Star-Wars-Episode-V-The-Empire-Strikes-Back-5.jpg", "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg", "http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX640_SY720_.jpg"];
var pos = 0;
var timeout = 500;
var imageEL = "#image1";
var slideIntervalFast = 5000;
var slideIntervalNorm = 7500;
var slideIntervalSlow = 10000;
var interval;

$(document).ready(function() {
    //right button click bind
    $("#rightbutton").click(function() {
        slideImgRight();
        //resetSlideshow();
        playSlideshow();
    });

    $(document).keydown(function(event) {
        if(event.which === 39){
            slideImgRight();
        }
        //resetSlideshow();
        playSlideshow();
    });

    // left button click bind
    $("#leftbutton").click(function() {
        slideImgLeft();
        pauseSlideshow();

    });
    $(document).keydown(function(event) {
        if (event.which === 37) {
            slideImgLeft();
            pauseSlideshow();
        }
    });
    // submit button bind
    $("#submitbutton").click(function() {
        addurl();
        pauseSlideshow();
    });
    $("#pause").click(function() {
        pauseSlideshow();
    });
    $("#play").click(function() {
        playSlideshow();
    });
    //create dots
    for (var i = 0; i<imageList.length; i++) {
        var dot = document.createElement("div");
        $(dot).addClass("dotprop");
        $(dot).attr("id", i);
        $("#dots").append(dot);
    }
    dotNavigation();

    //dot click bind
    dotBind();

    bindBackground();

    playSlideshow();

    menunav();

});


function slideImgRight() {
    $(imageEL).hide("slide", {direction: "left"}, "slow");
    pos+=1;
    if (pos>imageList.length - 1) {
        pos=0;
    }
    setTimeout(function() {
        console.log("right button 2, pos="+pos);
        $(imageEL).attr("src", imageList[pos]);
        $(imageEL).show("slide", {direction: "right"}, "slow");
        dotNavigation();
    }, timeout);

}

function slideImgLeft() {
    console.log("left button 1, pos="+pos);
    $(imageEL).hide("slide", {direction: "right"}, "slow");

    pos -= 1;
    if (pos<0) {
        pos=imageList.length - 1;
    }
    setTimeout(function() {
        console.log("left button 2, pos="+pos);
        $(imageEL).attr("src", imageList[pos]);
        $(imageEL).show("slide", {direction: "left"}, "slow");
        dotNavigation();
    }, timeout);


}

//change dot to the current position
function dotNavigation() {
    $(".dotprop").fadeTo("fast", 0.5);
    $("#" + pos).fadeTo("fast", 1);
}

function dotBind() {
    $(".dotprop").unbind("click");
    $(".dotprop").click(function(e) {
        $(imageEL).fadeOut("slow");
        pos = parseInt($(e.target).attr("id"));
        setTimeout(function() {
            $(imageEL).attr("src", imageList[pos]);
            $(imageEL).fadeIn("slow");
        }, timeout);
        dotNavigation();
        //pauseSlideshow();
        playSlideshow();
    });
}

function bindBackground() {
    $("#hoth").fadeTo("slow", 0.5);
    $("#hoth").click(function() {
        document.getElementById("border").style.backgroundImage = "url(http://img.lum.dolimg.com/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675&width=768)";
        $("#hoth").fadeTo("fast", 0.5);
        $("#endo").fadeTo("fast", 1);
        $("#tant").fadeTo("fast", 1);
    });
    $("#tant").click(function() {
        document.getElementById("border").style.backgroundImage = "url(http://img.lum.dolimg.com/v1/images/open-uri20150608-27674-obj7u0_7c60f729.jpeg?region=0%2C0%2C1200%2C513)";
        $("#tant").fadeTo("fast", 0.5);
        $("#endo").fadeTo("fast", 1);
        $("#hoth").fadeTo("fast", 1);
    });
    $("#endo").click(function() {
        document.getElementById("border").style.backgroundImage = "url(http://bi9he1w7hz8qbnm2zl0hd171.wpengine.netdna-cdn.com/wp-content/uploads/2015/04/Star-Wars-Battlefront.jpg)";
        $("#endo").fadeTo("fast", 0.5);
        $("#hoth").fadeTo("fast", 1);
        $("#tant").fadeTo("fast", 1);
    });
}

function addurl() {
    if (document.getElementById("userurl").value === "") {
        alert("No URL entered!")
    }
    else {
        imageList.push(document.getElementById("userurl").value);
        pos = imageList.length - 1;
        var dot = document.createElement("div");
        $(dot).addClass("dotprop");
        $(dot).attr("id", imageList.length - 1);
        $("#dots").append(dot);
        $(imageEL).fadeOut("slow");
        setTimeout(function() {
            $(imageEL).attr("src", document.getElementById("userurl").value);
            $(imageEL).fadeIn("slow");
        }, timeout);
        dotBind();
        dotNavigation();
    }
}

function clear() {
    interval = clearInterval(interval);
}

function pauseSlideshow() {
    clear();
    $("#pause").hide();
    $("#play").show();
    $("#cantinasong")[0].pause();
}

function playSlideshow() {
    var slideIntervalValue = $("#slidetimes").val();
    clear();
    if (slideIntervalValue === "Fast") {
        interval = window.setInterval(function () {
            slideImgRight();}, slideIntervalFast);
    }
    if (slideIntervalValue === "Normal") {
        interval = window.setInterval(function () {
            slideImgRight();}, slideIntervalNorm);
    }
    if (slideIntervalValue === "Slow") {
        interval = window.setInterval(function () {
            slideImgRight();}, slideIntervalSlow);
    }

    $("#play").hide();
    $("#pause").show();
    $("#cantinasong")[0].play();
}

function menunav() {
    $("#generalarea").hide();
    $("#generalpg").click(function () {
        $("#border").hide();
        $("#submitphotoarea").hide();
        $("#generalarea").show();
        pauseSlideshow();
    });
    $("#photopg").click(function() {
        $("#generalarea").hide();
        $("#submitphotoarea").show();
        $("#border").show();
        playSlideshow();
    });

}
