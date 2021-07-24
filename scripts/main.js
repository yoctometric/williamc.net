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

const game_html_template = `
<div class="game" id="GAME_ID">
  <div class="game-iframe">
    GAME_IFRAME
  </div>
  <p class="game-desc">GAME_DESC</p>
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
    console.log(json[0].title);

    // for each entry, generate an html container for the game
    for(var i = 0; i < json.length; i++) {
      console.log('gennin ' + i.toString())

      let html = game_html_template.replace("GAME_ID", 'game-'+i.toString()) // set the game div id
      html = html.replace('GAME_IFRAME', json[i].html) // set the iframe
      html = html.replace('GAME_DESC', json[i].desc) // set the description

      console.log('genned:\n' + html)
      // now actually apply the html
      $('#games-container').append(html)
    }
  });

}