/**
 * Created by saraf on 11/16/2014.
 */
// initialize arrays


var imgArray =  new Array(); // initialize an array to store multiple images
var textArray1 = new Array(); // text for news feed array


/* initializes all action within website */
function start() {

    // initialize the images to use from the pulldown menu
    imgArray[0] = './var/www/html/strahman/project2/public/images/harrington.jpg';
    imgArray[1] = './var/www/html/strahman/project2/public/images/Lex1.jpg';
    imgArray[2] = './var/www/html/strahman/project2/public/images/Lex2.jpg';
    imgArray[3] = './var/www/html/strahman/project2/public/images/Lex3.jpg';
    imgArray[4] = './var/www/html/strahman/project2/public/images/Lex4.jpg';
    imgArray[5] = './var/www/html/strahman/project2/public/images/LHS5.jpg';


    // intialize text for news feed
    textArray1 = ['/text/location.html', '/text/news1.html', '/text/news2.html', '/text/news3.html'];

    var random;

    // update news feed under title
    function updateNews() {
        {
            random = Math.floor(Math.random()*(textArray1.length-1));
            AJAX(textArray1[random], function (data) {
                var textareal = $('#textarea1')[0];
                textareal.innerText = data;
            })
        }
    }

    // update news in window
    window.setInterval(updateNews, 10);


} // end function start


// this is the first event executed and it is triggered once the page is loaded
// this callback starts the javascript program / triggers the script to run for the first time
window.addEventListener("load", start, false);


// dynamically render table content
function change_table_content(){
    AJAX('/data/data', function(data){
        var table = $("#div4")[0];
        table.innerHTML = data;

    });

}

// dynamically render text that goes with pictures and then call to change
// table content
function change(value) {
    var path = '/text/textContent/'+value;
    AJAX(path, function (data) {
        var textarea2 = $("#content")[0];
        textarea2.innerHTML = data;
        change_table_content();
    });

}



// This function allows selection of different items in the pulldown for images to occur.
window.onload= function(){

// set image to change on selection
    window.setImage = function() {

        // retrieve the main image
        var img = $("#mainImg")[0];

        // dynamically render text and table when image is changed
        change(this.value);

        // change the value of the current image to the value of the image array
        img.src = imgArray[this.value];

        return false;
    }


    // call this function when there is a change in the selector
    $("#selector").on("change", setImage);


};