$(document).ready(function(){

function ImageSwitcher(item) {

	this.Next = function() {
		toggle_hide();
		// show_next_image();
	}

	var toggle_hide = function() {
    console.log(item);
		if(item[0].style.visibility != "visible"){
			item[0].style.visibility = "visible";
		}
    else item[0].style.visibility = "hidden";

	}
	// var show_next_image = function() {
	// 	if(choices){
	// 		if(i == (choices.length)) {
	// 			i = 0;
	// 		}
	// 		choices[i].style.visibility = "visible";
	// 	}
	// }
}

  var pants = $("#pants");
	var shirts = $("#shirt");
  var skirts = $("#skirt");
  var top = $("#top");
  var dress = $("#dress");
  var heels = $("#syntheticshoes");
  var coat = $("#woolenblazer");
  var shoes = $("#leathershoes");
	var backgrounds = $(".bg");

	var shirt_picker = new ImageSwitcher(shirts);
	document.getElementById("icon_shirt").onclick = function() { shirt_picker.Next(); };

	var pants_picker = new ImageSwitcher(pants);
	document.getElementById("icon_pant").onclick = function() {pants_picker.Next(); };

  var coat_picker = new ImageSwitcher(coat);
	document.getElementById("icon_coat").onclick = function() {coat_picker.Next(); };

  var shoe_picker = new ImageSwitcher(shoes);
	document.getElementById("icon_shoe2").onclick = function() {shoe_picker.Next(); };

  var skirt_picker = new ImageSwitcher(skirts);
  document.getElementById("icon_skirt").onclick = function() { skirt_picker.Next(); };

  var top_picker = new ImageSwitcher(top);
  document.getElementById("icon_top").onclick = function() {top_picker.Next(); };

  var dress_picker = new ImageSwitcher(dress);
  document.getElementById("icon_dress").onclick = function() {dress_picker.Next(); };

  var heel_picker = new ImageSwitcher(heels);
  document.getElementById("icon_heel").onclick = function() {heel_picker.Next(); };

	// var bg_picker = new ImageSwitcher(backgrounds);
	// document.getElementById("bg_button").onclick = function() {bg_picker.Next(); };

});

  $("#icon_pant").click(function(){
  $("#pant").css("visibility", "visible"); });
