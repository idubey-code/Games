
document.fonts.ready.then(main);

function main(){

  var p1 = prompt("Player 1, Enter your name:");
  var p2 = prompt("Player 2, Enter your name:");
  var chips = $('button');
  var player = 1;
  var winrow = false;
  var wincol = false;
  var windiag = false;
  var game = true;

  $("#head").text(p1 + " it's your turn. Please pick a column to drop your chip.");
  $("#player1").text("Player 1: "+p1);
  $("#player2").text("Player 2: "+p2);

  function checkRow(){

    for(var i = 3; i <= 41; i++){
      if((chips.eq(i).css('background-color') === "rgb(255, 101, 47)") &&
      (chips.eq(i-1).css('background-color') === "rgb(255, 101, 47)") &&
      (chips.eq(i-2).css('background-color') === "rgb(255, 101, 47)") &&
      (chips.eq(i-3).css('background-color') === "rgb(255, 101, 47)")){
        return true;
      }
      else if((chips.eq(i).css('background-color') === "rgb(20, 167, 108)") &&
      (chips.eq(i-1).css('background-color') === "rgb(20, 167, 108)") &&
      (chips.eq(i-2).css('background-color') === "rgb(20, 167, 108)") &&
      (chips.eq(i-3).css('background-color') === "rgb(20, 167, 108)")){
        return true;
      }
    }
  }

  function checkColumn(){

    for(var i = 1; i < 8; i++){
      for(var j = 3; j < 6; j++){
        if(($('.'+i).eq(j).css('background-color') === "rgb(255, 101, 47)") &&
        ($('.'+i).eq(j-1).css('background-color') === "rgb(255, 101, 47)") &&
        ($('.'+i).eq(j-2).css('background-color') === "rgb(255, 101, 47)") &&
        ($('.'+i).eq(j-3).css('background-color') === "rgb(255, 101, 47)")){
          return true;
        }
        else if(($('.'+i).eq(j).css('background-color') === "rgb(20, 167, 108)") &&
        ($('.'+i).eq(j-1).css('background-color') === "rgb(20, 167, 108)") &&
        ($('.'+i).eq(j-2).css('background-color') === "rgb(20, 167, 108)") &&
        ($('.'+i).eq(j-3).css('background-color') === "rgb(20, 167, 108)")){
          return true;
        }
      }
    }
  }

  function checkDiagnol(){

    for(var i = 0; i <= 14; i+=7){
      for(var j = i; j < i+7; j++){
        if(j < i+3){
          if((chips.eq(j).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+8).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+16).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+24).css('background-color') === "rgb(255, 101, 47)")){
            return true;
          }
          else if((chips.eq(j).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+8).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+16).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+24).css('background-color') === "rgb(20, 167, 108)")){
            return true;
          }
        }
        else if(j > i+3){
          if((chips.eq(j).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+6).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+12).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+18).css('background-color') === "rgb(255, 101, 47)")){
            return true;
          }
          else if((chips.eq(j).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+6).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+12).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+18).css('background-color') === "rgb(20, 167, 108)")){
            return true;
          }
        }
        else if (j === i+3) {
          if((chips.eq(j).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+8).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+16).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+24).css('background-color') === "rgb(255, 101, 47)")){
            return true;
          }
          else if((chips.eq(j).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+8).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+16).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+24).css('background-color') === "rgb(20, 167, 108)")){
            return true;
          }
          else if((chips.eq(j).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+6).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+12).css('background-color') === "rgb(255, 101, 47)") &&
          (chips.eq(j+18).css('background-color') === "rgb(255, 101, 47)")){
            return true;
          }
          else if((chips.eq(j).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+6).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+12).css('background-color') === "rgb(20, 167, 108)") &&
          (chips.eq(j+18).css('background-color') === "rgb(20, 167, 108)")){
            return true;
          }
        }
      }
    }
  }

  function win(arg){

    winrow = checkRow();
    wincol = checkColumn();
    windiag = checkDiagnol();

    if( winrow || wincol || windiag ){
      $("#player1").text("Player 1:");
      $("#player2").text("Player 2:");
      if(arg === 1){
        $("#head").text(p1 + " Won !");
      }
      else if(arg === 2){
        $("#head").text(p2 + " Won !");
      }
      game = false;
    }
  }

  function draw(){

    var count = 0;
    for(var i = 0; i<=41 ; i++){
      if((chips.eq(i).css('background-color') === "rgb(116, 116, 116)")){
        count+=1;
      }
    }
    if(count===0){
      $("#player1").text("Player 1:");
      $("#player2").text("Player 2:");
      $("#head").text("It's a draw. Please restart.");
      game = false;
    }
  }

  function dropChip(){

    if (game) {

      var column = $(this).attr('class');
      for(var i=5; i>=0; i--){
        if ($("."+column).eq(i).css('background-color') === "rgb(116, 116, 116)" && player === 1){
          $("."+column).eq(i).css('background-color','#14A76C');
          break;
        }
        else if ($("."+column).eq(i).css('background-color') === "rgb(116, 116, 116)" && player === 2){
          $("."+column).eq(i).css('background-color','#FF652F');
          break;
        }
      }
    }

    draw();
    win(player);

    if(($("#player1").text() !== "Player 1:") && ($("#player2").text() !== "Player 2:")){
      if($("#head").text() === p1 + " it's your turn. Please pick a column to drop your chip."){
        $("#head").text(p2 + " it's your turn. Please pick a column to drop your chip.");
        player = 2;
      }else {
        $("#head").text(p1 + " it's your turn. Please pick a column to drop your chip.");
        player = 1;
      }
    }
  }

  chips.on('click',dropChip);

}
