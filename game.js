userClickedPattern = [];
var started = false;
var gamePattern = [];

var level = 0;
var index =0;

var buttonColours = ["red","blue","green","yellow"];


var sounds = {
 blue:new Audio("sounds/blue.mp3"),
 green:new Audio("sounds/green.mp3"),
 red:new Audio("sounds/red.mp3"),
 wrong:new Audio("sounds/wrong.mp3"),
 yellow:new Audio("sounds/yellow.mp3")
}

//Check if button was pressed 
$(".btn").on("click",function(){
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(userClickedPattern.length-1);

})

function nextSequence(){
    userClickedPattern = [];

    level++;
    $("h1").text("Level "+level);
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("."+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    sounds[name].play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");},100);
    }

$(document).on("keydown", function(){
    
    
    if (started == true)
        { }
    else {
        nextSequence();
    }
    
    started = true;
})

function checkAnswer(currentLevel){
    
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
                nextSequence();
            }, 1000);

        }
    }else {
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over")},200);
            $("h1").text("Game over, Press Any Key to Restart");
            startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}