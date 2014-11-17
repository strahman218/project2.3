/**
 * Created by saraf on 11/17/2014.
 */
var express = require('express');
var jade  = require('jade');
var router = express.Router();


/* GET data for table and render it inside of a table  using jade file table.jade*/
router.get('/data', function(req, res) {

    var tablevalues =
        [
            [["$10","1 hour","low"],["$20","2 hours","moderate"],["$40","5 hours","high"]],
            [["$10","1 hour","low"],["$20","2 hours","moderate"],["$40","5 hours","high"]],
            [["$10","1 hour","low"],["$20","2 hours","moderate"],["$40","5 hours","high"]],
            [["$10","1 hour","low"],["$20","2 hours","moderate"],["$40","5 hours","high"]]
        ];

    var tablegiven = tablevalues[Math.floor(Math.random()*tablevalues.length)];


    res.render('tablex', { table: tablegiven });
});

/* GET new text for the description next to the image and render it from jade file*/
router.get('/textContent/:name', function(req, res) {

    var dir = __dirname.split("/").slice(0,-1).join("/");
    res.render(req.param("name"), {});

});


/* GET news feed text path to be displayed from client */
router.get('/:file', function(req, res) {

    var dir = __dirname.split("/").slice(0,-1).join("/");
    console.log(dir+"/text/"+req.param("file"));
    res.sendFile(dir+"/text/"+req.param("file"));

});



module.exports = router;