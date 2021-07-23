

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

    $("#header-container").html(header_html)

    // button interaction
    $("#games-button-left").click(function(){
        alert('clicked!');
    });
    
    $("#games-button-right").click(function(){
        alert('clicked!');
    });
});
