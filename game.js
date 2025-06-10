var buttonColours = ["red","blue","green","yellow"];
gamePattern = []



function nextSequence(){
    randomNumber = Math.round(Math.random()*3);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("."+randomChosenColour).fadeOut(100).fadeIn(100);
}