function check(){

    var sporsmaal1 = document.quiz.sporsmaal1.value;
    var sporsmaal2 = document.quiz.sporsmaal2.value;
    var sporsmaal3 = document.quiz.sporsmaal3.value;
    var correct = 0;


    if (sporsmaal1 == "Trippie Redd") {
        correct++;
    }
    if (sporsmaal2 == "Love scars 3") {
        correct++;
    }
    if (sporsmaal3 == "er det no sak?") {
        correct++;
    }

    var bilder = ["img/TrippieLikey.gif", "img/nesten.gif", "img/nei as.gif"];
    var varsler = ["Da er vi i rute!", "Nesten innafor", "Dette var litt wack :/"];
    var score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("varsler").innerHTML = varsler[score];
    document.getElementById("number_correct").innerHTML = "Du fikk " + correct + " poeng.";
    document.getElementById("bilde").src = bilder[score];
}