var buttonColours = ["red","blue","green","yellow"];
gamePattern = []

var sounds = {
 blue:new Audio("sounds/blue.mp3"),
 green:new Audio("sounds/green.mp3"),
 red:new Audio("sounds/red.mp3"),
 wrong:new Audio("sounds/wrong.mp3"),
 yellow:new Audio("sounds/yellow.mp3")
}



function nextSequence(){
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("."+randomChosenColour).fadeOut(100).fadeIn(100);
    sounds[randomChosenColour].play();
}