function check() {

    var sporsmaal1 = document.quiz.sporsmaal1.value;
    var sporsmaal2 = document.quiz.sporsmaal2.value;
    var sporsmaal3 = document.quiz.sporsmaal3.value;
    var sporsmaal4 = document.quiz.sporsmaal4.value;
    var correct = 0;


    if (sporsmaal1 === "Trippie Redd") {
        correct++;
    }
    if (sporsmaal2 === "Love scars 3") {
        correct++;
    }
    if (sporsmaal3 === "er det no sak?") {
        correct++;
    }
    if (sporsmaal4 === "Dance in the sweet memories") {
        correct++;
    }

    var bilder = ["https://thumbs.gfycat.com/WarlikeGiganticDiamondbackrattlesnake-max-1mb.gif", "https://media.giphy.com/media/f9SzoxyV06VOSz7ARy/giphy.gif", "https://media1.tenor.com/images/9ad8bf7b8858376af2e2103bf4963296/tenor.gif?itemid=9866648"];
    var varsler = ["Da er vi i rute!", "Nesten innafor", "Dette var litt wack :/"];
    var score;

    if (correct === 0) {
        score = 2;
    }

    if (correct > 0 && correct < 4) {
        score = 1;
    }

    if (correct === 4) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("varsler").innerHTML = varsler[score];
    document.getElementById("number_correct").innerHTML = "Du fikk " + correct + " poeng.";
    document.getElementById("bilde").src = bilder[score];


}


    rødt.style.display = "none";

    var h = 10;

    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            h = h - 1;
            console.log("yeet");
            if (h === 0) {
                console.log("funker");
                rødt.style.display = "block";

            }
        }, 1000 * i);
    }