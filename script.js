function myFunction() {
    var yourName = prompt("what is your name?");
    var theirName = prompt("what is their name?");


    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;


    if (loveScore > 70) {
        demo.innerHTML = "your love score " + yourName + " from " + theirName + " " + loveScore + " %" + " you love each other.";
    } else {
        demo.innerHTML = theirName + " love score " + loveScore + "% Find out what your crush is passionate about.";
    }




}
