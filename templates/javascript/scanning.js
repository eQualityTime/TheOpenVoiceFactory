var azulejoe_scanning = false;

function trigger_on_scan(){
  if (azulejoe_scanning == true) {
    if (y == 0) {
      if (x >= Math.floor(grid_size_columns / 4)) {
        if (x < Math.ceil(grid_size_columns * 0.75)) {//testing if we are in the message window
          makeWav()
          return
        }
      }
    }
  }
  add(x, y);
}

document.body.onkeydown = function(e) {
   trigger_on_scan()
};


$('#mainGrid').click(function(e) {
  if (azulejoe_scanning == true) {
     trigger_on_scan();
  }
  else {
    rows = grid_size_rows;
    colums = grid_size_columns;

    offset_t = $(this).offset().top - $(window).scrollTop();
    offset_l = $(this).offset().left - $(window).scrollLeft();
//alert(offset_t+" "+ $(this).offset().top+" "+$(window).scrollTop())
//percentage_accross=(Math.round((e.clientX - offset_l)) / this.width)
distance_down_in_table=e.clientY - offset_t
percentage_down=(Math.round((e.clientY - offset_t)) / 540)

//alert(offset_t+" "+e.clientY+" "+" "+distance_down_in_table+" "+percentage_down)
    var left = Math.floor(Math.round((e.clientX - offset_l)) / this.width * colums);
    var our_top = Math.floor(Math.round((e.clientY - offset_t)) / 540 * rows);

if(our_top<grid_size_columns){
if(left<grid_size_columns){
    add(left, our_top)
  }
}
}
});
//credit http://stackoverflow.com/a/14045047/170243


function toggleScanning() {

  if (azulejoe_scanning == true) {
    azulejoe_scanning = false;
    stop_scanning();
  }
  else {
    azulejoe_scanning = true
    start_scanning();
  }
}

main = document.getElementById("mainGrid");
var offset_t = $(main).offset().top //- $(window).scrollTop();
var offset_l = $(main).offset().left //- $(window).scrollLeft();
var interval_access_var = 0

function start_scanning() {
  if (azulejoe_scanning == true) {
    hope = document.getElementById("box");
    $(hope).css('position', "absolute");
    $(hope).css('width', 720 / grid_size_rows);
    $(hope).css('height', 520 / grid_size_columns);
    $(hope).css('top', offset_t + 105 * y);
    $(hope).css('left', offset_l + 140 * x);
    //$(hope).css('top', offset_t);
    //$(hope).css('left', offset_l);
    $(hope).css('border', "4px solid #ffbe00");
    $(hope).css('background-color', "transparent");

    interval_access_var = setInterval(itterate_direct_Scanner, 1000);
  }
}
var x = 0;
var y = 0;

function stop_scanning() {
  hope = document.getElementById("box");
  $(hope).css('position', "absolute");
  $(hope).css('width', "0px");
  $(hope).css('height', "0px");
  $(hope).css('top', 0);
  $(hope).css('left', 0);
  $(hope).css('border', "0px  #ffbe00");
  $(hope).css('background-color', "transparent");
  clearInterval(interval_access_var);

}

function itterate_direct_Scanner() {
  x++;
//alert(grid_size_rows+" "+x);
  if (x >= grid_size_rows) {
    x = 0;
    y = y + 1;
  }
  if (y >= grid_size_columns) {
    y = 0;
  }
  $(hope).css('top', offset_t + (520 / grid_size_rows) * y);
  $(hope).css('left', offset_l + (720 / grid_size_columns) * x);
}
