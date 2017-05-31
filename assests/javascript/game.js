$( document ).ready(function(){
    var yourNumber = 0;
    var wins = 0;
    var losses = 0;
    var yourTotalScore = 0;

    var randomNumber = Math.floor(Math.random() * 12 +1);
    $('#randomNumber').html(randomNumber);

    var restart = function () {
        //restart the variables that  are printing to the screen.
        wins = 0;
        losses = 0;
        yourTotalScore = 0;
        //then print them to the screen.
        $("#yourTotalScore").html(yourTotalScore);
        $('#wins').html(wins);
        $("#losses").html(losses);
        //generate another random number and print to screen.
        var randomNumber = Math.floor(Math.random() * 12 +1);
        $('#randomNumber').html(randomNumber);
    }

    // //grab the reset button with jQuery and then run the function restart on click.
    // $('#reset-button').on('click', restart);

     var newYourNumber =  function yourNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
     };

    $("#one").on("click", function(){
        var randomOnClick = newYourNumber(1 , 12);
        console.log(randomOnClick);
        yourTotalScore = yourTotalScore + randomOnClick;
        $("#finalTotal").html(yourTotalScore);

        if (finalTotal == randomNumber) {
            wins++;
            $('#wins').html(wins);
        }
        if (finalTotal > randomNumber){
            losses++;
            $("#losses").html(losses);
        }

    });

    $("#two").on("click", function(){
       var randomOnClick = newYourNumber(1 , 12);
        console.log(randomOnClick);
        yourTotalScore = yourTotalScore + randomOnClick;
        $("#finalTotal").html(yourTotalScore);

        if (yourTotalScore == randomNumber) {
            wins++;
            $('#wins').html(wins);
        }
        if (yourTotalScore > randomNumber){
            losses++;
            $("#losses").html(losses);
        }  
    });

    $("#three").on("click", function(){
      var randomOnClick = newYourNumber(1 , 12);
        console.log(randomOnClick);
        yourTotalScore = yourTotalScore + randomOnClick;
        $("#finalTotal").html(yourTotalScore);

        if (yourTotalScore == randomNumber) {
            wins++;
            $('#wins').html(wins);
        }
        if (yourTotalScore > randomNumber){
            losses++;
            $("#losses").html(losses);
        }  
    });

    $("#four").on("click", function(){
      var randomOnClick = newYourNumber(1 , 12);
        console.log(randomOnClick);
        yourTotalScore = yourTotalScore + randomOnClick;
        $("#finalTotal").html(yourTotalScore);

        if (yourTotalScore == randomNumber) {
            wins++;
            $('#wins').html(wins);
        }
        if (yourTotalScore > randomNumber){
            losses++;
            $("#losses").html(losses);
        }
    });

});