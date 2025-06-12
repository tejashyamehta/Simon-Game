userClickedPattern = [];
started = false;

var level = 0;

var buttonColours = ["red","blue","green","yellow"];
gamePattern = [];

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
    console.log(userClickedPattern);
})

function nextSequence(){
    level++;
    console.log(level);
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
        $("."+currentColour).removeClass("pressed");},100)    
    }

$(document).on("keydown", function(){
    
    
    if (started == true)
        {
            console.log(1);
        }
    else {
        nextSequence();
    }
    
    started = true;
})