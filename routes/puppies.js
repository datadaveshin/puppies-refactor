var express = require('express');
var router = express.Router();

console.log("HEY ######!!!!!!!!!!!!!!!!!!");

router.get('/new', function(req, res) {
    console.log("puppies new!")
    res.render('puppies/new');
});

/**
Get the stuff back
*/
router.post('/', function(req, res) {
    var age = Number(req.body.age);
    var name = req.body.name;
    id += 1;
    puppies.push({'name': name, 'age': age, 'id': id})
    res.redirect('/')
});

router.get('/:id', function(req, res) {
    // console.log(req.params.id)
    let inputID = Number(req.params.id)
    let pupOfInterest = puppies.filter(function(pupObj) {
        return (inputID === pupObj.id);
    });
    pupOfInterest = pupOfInterest[0];
    console.log('pupOfInterest', pupOfInterest)
    res.send(pupOfInterest.name)
});

module.exports = router;
