/**
 * Created by miles on 2/19/16.
 */
var imageList = ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png", "https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg", "http://vignette3.wikia.nocookie.net/starwars/images/2/24/EPII_AotC_poster.png/revision/latest?cb=20130822173923", "http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX640_SY720_.jpg", "http://www.family-flix.com/wp-content/uploads/2015/06/star-wars-episode-4-a-new-hope.jpg", "http://moviewallpaperpics.com/wp-content/uploads/2015/04/Star-Wars-Episode-V-The-Empire-Strikes-Back-5.jpg", "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg", "http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX640_SY720_.jpg"]

function slidePic() {

}



var NumberOfPhotos = imageList.length - 1;
var pos = 0;

$(document).ready(function() {
    $("#rightbutton").click(function() {
        $("#image1").hide("slide", {direction: "left"}, "slow");
        pos+=1;
        if (pos>NumberOfPhotos) {
            pos=0;
        }
        setTimeout(function() {
            $("#image1").attr("src", imageList[pos]);
        }, 500);
        $("#image1").show("slide", {direction: "right"}, "slow");


    })
});


$(document).ready(function() {
    $("#leftbutton").click(function() {
        $("#image1").hide("slide", {direction: "right"}, "slow");
        pos -= 1;
        if (pos<0) {
            pos=NumberOfPhotos;
        }
        setTimeout(function() {
            $("#image1").attr("src", imageList[pos]);
        }, 500);
        $("#image1").show("slide", {direction: "slow"}, "slow");

    })

})
