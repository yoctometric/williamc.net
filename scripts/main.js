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

//global vars
let game_menu_index = 0;
let game_menu_size = 0;

$(document).ready(function(){

    // initialize header
    $("#header-container").html(header_html)

    // link button interaction
    $("#games-button-left").click(function(){
  scrollGameElements(-1);
    });
    
    $("#games-button-right").click(function(){
      scrollGameElements(1);
    });

    // load in the itch.io game elements
    loadGameElements("./data/itch_games.json");
});

// reading json data for game links
function loadGameElements(file) {

  $.getJSON(file, function(json) {
    console.log(json[0].title);
    game_menu_size = json.length;

    // for each entry, generate an html container for the game
    for(var i = 0; i < json.length; i++) {
      console.log('gennin ' + i.toString())

      let html = game_html_template.replace("GAME_ID", 'game-'+i.toString()) // set the game div id
      html = html.replace('GAME_IFRAME', json[i].html) // set the iframe
      console.log('setting the iframe to '+ json[i].html)
      html = html.replace('GAME_DESC', json[i].desc) // set the description

      console.log('genned:\n' + html)
      // now actually apply the html
      $('#games-container').append(html)

      // if the index is past 0, hide the element so only one will show
      $('#game-'+i.toString()).prop("hidden", true);
    }
  });
}

function scrollGameElements(dir) {
  console.log('old index: ' + game_menu_index.toString())
  $('#game-'+game_menu_index.toString()).prop("hidden", true); // hide current
  console.log('new index: ' + game_menu_index.toString())

  game_menu_index += dir;
  
  if (game_menu_index >= game_menu_size) {
    game_menu_index = 0;
  } 
  else if (game_menu_index < 0) {
    game_menu_index = game_menu_size - 1;
  }

  $('#game-'+game_menu_index.toString()).prop("hidden", false); // show new

}