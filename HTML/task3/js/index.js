
/* Add template item on a page*/

document.addEventListener('DOMContentLoaded', () => {
  if('content' in document.createElement('template')) {
    
      var temp = document.getElementsByTagName("template")[0];
      var clon = temp.content.cloneNode(true);
      document.getElementsByClassName('footer__left')[0].appendChild(clon);
    
  }else {

  }


  /* Pop-up window*/

  var updateButton = document.getElementById('fix-button');
  var cancelButton = document.getElementById('pop-cancel');
  var dialog = document.getElementById('dialog');

  updateButton.addEventListener('click', function () {
    dialog.showModal();
  });

  cancelButton.addEventListener('click', function () {
    dialog.close();
  });
})


/* Canvas script */

var canvas = document.getElementById('canvas');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');

  
  ctx.fillStyle = "#03fc20";
  ctx.fillRect (0,0, 85,85 );

  ctx.fillStyle = "#e5ed02";
  ctx.fillRect (20,20, 250,250);

} else {
}