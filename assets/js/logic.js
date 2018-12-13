$(document).ready(function () {

    // Setting global variables.
    var input = $("#search");
    var submit = $("#submit");
    var apiKey = "qJqrKYdk7iIV7049lGHy7dRR5bL4qMdB";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + apiKey + "&rating=g&limit=10"
    var reactionGif = ["happy", "sad", "angry", "excited", "confused"];
    var numberOfGifs = 10;
    var rating = "g";
    creatButtons();
    // getGiphy();
    function creatButtons() {
        for (var i = 0; i < reactionGif.length; i++) {
            console.log(reactionGif[i]);
            var button = "<button class= 'btn btn-primary>"
            var buttonFill = $(button).text(reactionGif[i]);
            console.log(buttonFill);
            $(".button-container").append(buttonFill);
        }
    }

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            // Creating buttons.
            console.log(response);

            // Get input from the search when the user presses submit
            submit.on("click", function (event) {
                event.preventDefault();
                var userInput = input.val();
                console.log(userInput);
                // getGiphy(userInput);
            })


        })



    // // Ajax call.
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"

    //         .then(function (data) {
    //             console.log(data);

    //             // Rendering the buttons.
    //             function renderButtons() {
    //                 for (var i = 0; i < reactionGif.length; i++) {
    //                     var newButton = $(".container").append("<button>");
    //                     var button = newButton.reactionGif[i];
    //                 }
    //             }
    //             // Get input from the search when the user presses submit
    //             submit.on("click", function (event) {
    //                 event.preventDefault();
    //                 var userInput = input.val();
    //                 console.log(userInput);
    //                 getGiphy(userInput);
    //             })
    //             // Make a get request to the api with the user input
    //             function getGiphy(userInput) {

    //             });
    // }

    // })

})
