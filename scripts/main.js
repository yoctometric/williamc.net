const header_html = `
<div class="wrapper">
  <div class="header-bar">
    <div id="logo" class="horizontal-list">
      <a href="index.html">
        <img src="images/logo_transparent.png" alt="site logo" id="site-logo">
      </a>
    </div>
    <div id="menu" class="horizontal-list">
      <ul>
        <li class="menu-item"><a href="#games">Games</a></li>
        <li class="menu-item"><a href="#code">Code</a></li>
        <li class="menu-item"><a href="#contact">Contact</a></li>
        <li class="menu-item"><a href="data/Resume-Fall-2021.pdf" target="_blank">Resume</a></li>
        <li class="menu-item"><a href="https://github.com/yoctometric/" target="_blank">Github</a></li>
      </ul>
    </div> 
  </div>
</div>
`

const game_html_template = `
<div class="game-panel" id="GAME-ID">
  <div class="game-panel-left">
    <img src="images/boids_gif.gif" class="game-panel-gif" alt="gameplay gif" id="GAME-ID-GIF">
    <button class="game-panel-button" id="GAME-ID-BUTTON">
      Play on Itch.io
    </button>
  </div>
  <div class="game-panel-right">
    <h3 class="game-panel-title" id="GAME-ID-TITLE">
      Game Title Goes Here
    </h3>
    <p class="game-panel-desc" id="GAME-ID-DESC">
      placeholder desc
    </p>
  </div>
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
    game_menu_size = json.length;

    // for each entry, generate an html container for the game
    for(var i = 0; i < json.length; i++) {
      let id = 'game-'+i.toString();
      let html = game_html_template.replace("GAME-ID", id); // set the game div id
      html = html.replace("GAME-ID-TITLE", id + "-title"); // set the title id
      html = html.replace("GAME-ID-GIF", id + "-gif"); // set the gif id
      html = html.replace("GAME-ID-DESC", id + "-desc"); // set the desc id
      html = html.replace("GAME-ID-BUTTON", id + "-button"); // set the button id

      id = '#' + id; // set the id for ue with jquery

      // apply the html
      if (i == 0) {
        // for the first element, replace the placeholder html
        $('#games-container').html(html);

      } else {
        // if the index is past 0, append and hide the element so only one will show
        $('#games-container').append(html);

        $(id).css("display", "none");
      }

      let link = json[i].link;

      // update the contents of the added html to contain data from the itch_games json
      $(id + '-title').html(json[i].title);
      $(id + '-desc').html(json[i].desc);
      $(id + '-gif').attr("src", json[i].gif_path);
      $(id + '-button').click(function (url) {
        window.open(link, "_blank")
    });

    }
  });
}

function scrollGameElements(dir) {
  $('#game-'+game_menu_index.toString()).css("display", "none"); // hide old

  game_menu_index += dir;
  
  if (game_menu_index >= game_menu_size) {
    game_menu_index = 0;
  } 
  else if (game_menu_index < 0) {
    game_menu_index = game_menu_size - 1;
  }

  $('#game-'+game_menu_index.toString()).css("display", "block") // show new

}