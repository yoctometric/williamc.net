const header_html = `
<div class="wrapper">
    <div id="menu">
      <ul>
        <li>1 menu item</li>
        <li>2 menu item</li>
        <li>3 menu item</li>
      </ul>
    </div> 
  </div>
`


$(document).ready(function(){

    // initialize header
    $("#header-container").html(header_html)

    // link button interaction
    $("#games-button-left").click(function(){
        alert('clicked!');
    });
    
    $("#games-button-right").click(function(){
        alert('clicked!');
    });

    // load in the itch.io game elements
    loadGameElements("./data/itch_games.json");
});

// reading json data for game links
function loadGameElements(file) {

  $.getJSON(file, function(json) {
    console.log(json);
  });

}