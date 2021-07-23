$(document).ready(function(){

    // load in the header content
    $("#header-content").load("head.html"); 
    console.log('loaded?')

    // button interaction
    $("#games-button-left").click(function(){
        alert('clicked!');
    });
    
    $("#games-button-right").click(function(){
        alert('clicked!');
    });
});
