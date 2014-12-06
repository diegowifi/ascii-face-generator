var smiley =[
    {"value":"( .-. )"},
    {"value":"( .o.)"}
];
    
var x = Math.floor((Math.random() * smiley.length) + 0);

document.getElementById('content').innerHTML= smiley[x].value;