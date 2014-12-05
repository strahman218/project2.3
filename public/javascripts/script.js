/**
 * Created by saraf on 11/16/2014.
 */

// initialize picture and text arrays //
var pictureArray =  new Array();
var textArray1 = new Array();


// initialize website
function start() {
    // initialize pictures
    pictureArray[0] = './images/harrington.jpg';
    pictureArray[1] = './images/Lex1.jpg';
    pictureArray[2] = './images/Lex2.jpg';
    pictureArray[3] = './images/Lex3.jpg';
    pictureArray[4] = './images/Lex4.jpg';
    pictureArray[5] = './images/LHS5.jpg';

    // intialize text for heading
    textArray1 = ['/text/news4.txt','/text/news1.txt', '/text/news2.txt', '/text/news3.txt'];


    // updates text in header
    function update() {
      {     var random;
            random = Math.floor(Math.random()*(textArray1.length-1));
            AJAX(textArray1[random], function(data) {
                var textarea1 = $('#textarea1')[0];
                textarea1.innerText = data;
            })
        }
    }

    // text updates every 100 seconds --> just a test, increase time
    window.setInterval(update, 7000);
};

// this triggers the script to run for the first time
window.addEventListener("load", start, false);

// begin table content
function changeTable(){
    AJAX('/data/data', function(data){
        var table = $("#div4")[0];
        table.innerHTML = data;

    });
}

// make text and table change at the same time
function change(value) {
    var path = '/text/textContent/'+value;
    AJAX(path, function (data) {
        var textarea2 = $("#content")[0];
        textarea2.innerHTML = data;
        changeTable();
    });

}

// allows user to select different items in the menu
window.onload= function(){
// set image to change when selected
    window.setImage = function() {
        // retrieve the main image
        var img = $("#mainImage")[0];
        // render text and table when image changes
        change(this.value);
        // change the value of the current image to the value of the image array
        img.src = pictureArray[this.value];
        return false;
    }
    //this changes the image when there's a change in the pulldown menu
    $("#pulldown").on("change", setImage);


};