// create audio sound effects

var slurp = new Audio ('slurp.mp3');
var plastic = new Audio ('plastic.mp3');
var glass = new Audio ('glass-sliding.mp3');
var cafe = new Audio ('cafe.mp3');
cafe.play();
var music_link = document.getElementById ('pause-music');
music_link.addEventListener ('click', function (){
	cafe.pause ();
});

var music_link_play = document.getElementById ('play-music');
music_link_play.addEventListener ('click', function (){
	cafe.play ();
});





// function to move old image off screen
function slideOldImageOut(newFileName, id) { 
	//slurp.play ();
	glass.load();
	glass.play ();
	var drink_img = document.querySelector ('.drink_img');
	drink_img.style.marginRight="-400px";
	var pos = -400; 

	var int = setInterval (moveImage, 50);
	function moveImage () {
		if(pos < -2500) {
			clearInterval (int);
			slideNewImageIn (newFileName, id);
		} else {
			drink_img.style.marginRight = pos + "px";
			pos = pos -40; 
		}
	}	
}
// function to move new image on screen
function slideNewImageIn(newFileName, id) {
	glass.load ();
	//slurp.pause ();
	glass.play ();
	var drink_img = document.querySelector ('.drink_img');
	drink_img. src = newFileName;
	var pos = -2500; 

	var int = setInterval (moveImage, 50);
	function moveImage () {
		if(pos >= -400) {
			clearInterval (int);
			// switch to current drink's description
			if(document. querySelectorAll('.active').length > 0){
				document. querySelectorAll('.active')[0].classList.remove('active');
			}
			document.getElementById(id) .classList.add("active");
		} else {
			drink_img.style.marginRight = pos + "px";
			pos = pos +40; 
		}
	}	
}
// check to see what drink you are based on the date 
function checkDate(theDateString){
	var input_name = document.querySelector ('#input_name').value;
	var theDate = new Date (theDateString);
	if(theDate.toString() != 'Invalid Date'  ){
		var dateArray = theDateString.split('/');
		var month = dateArray [0]-1;
		var day = dateArray [1];
		var newDate = new Date(2018,month,day);
		console.log (dateArray);

		//check dates to see what starbucks drink they are 
		if(newDate >= new Date (2018,2,21) && newDate <= new Date (2018,3,19) ){
			var newFileName = "caramel_honey_latte_copy.png";
			var id="aries";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
		}
		else if(newDate >= new Date (2018,3,20) && newDate <= new Date (2018,4,20) ){
			//Taurus
			var newFileName = "teavana_mango_black_tea_lemonade_mexico_resized.png";
			var id ="taurus";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);

// this needs to 

		}
		else if(newDate >= new Date (2018,4,21) && newDate <= new Date (2018,5,20) ){
			//Gemini
			var newFileName = "starbucks_doubleshot.png";
			var id="gemini";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);

			
		}
		else if(newDate >= new Date (2018,5,21) && newDate <= new Date (2018,6,22) ){
			//Cancer
			var newFileName = "refresher_mint.png";
			var id="cancer";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
			
		}
		else if(newDate >= new Date (2018,6,23) && newDate <= new Date (2018,7,22) ){
			//leo
			var newFileName = "ombre_drink.png";
		var id="leo";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
			
		}
		else if(newDate >= new Date (2018,7,23) && newDate <= new Date (2018,8,22) ){
			//virgo
			var newFileName = "espresso_cono_panna.png";
			var id="virgo";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
			
		}
		else if(newDate >= new Date (2018,8,23) && newDate <= new Date (2018,9,22) ){
			//libra
			var newFileName = "Pina_Colada_.png";
			var id="libra";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
			
		}
		else if(newDate >= new Date (2018,9,23) && newDate <= new Date (2018,10,21) ){
			//scorpio
			var newFileName = "starbucks-blonde-roast.png";
			var id="scorpio";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
			
		}
		else if(newDate >= new Date (2018,10,22) && newDate <= new Date (2018,11,21) ){
			//Sagittarius
			var newFileName ="pumpkin_spice_latte.png";
			var id="sagittarius";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
			
		}
		else if(newDate >= new Date (2018,11,22) && newDate <= new Date (2019,0,19) ){
			//capricorn
			var newFileName = "mocha_latte.png";
			var id="capricorn";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
			
		}
		else if(newDate >= new Date (2018,0,20) && newDate <= new Date (2018,1,18) ){
			//aquarius
			var newFileName = "starbucks_peppermint_mocha.png";
			var id="aquarius";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
			
		}
		else if(newDate >= new Date (2018,1,19) && newDate <= new Date (2018,2,20) ){
			//pisces
			var newFileName = "cherry_mocha.png";
			var id="pisces";
			document.querySelector("#"+id+" h2 span").innerHTML=input_name;
			slideOldImageOut (newFileName, id);
			
		}
		
		else {
			console.log (newDate);
		}
	
	}   else {
		alert ('Please Enter Date In Correct Format (00/00/00');

	}
}
document.querySelector ('#submit'). addEventListener ('click', function () {
	var birthday = document.querySelector ('#birthday').value;
	//var theDate = new Date(birthday);
	checkDate (birthday);
});

var footer_links = document.querySelectorAll ('footer a');
for (var i = 0; i < footer_links.length; i ++ ) {
	footer_links [i]. addEventListener ('click', function () {
		//checkDate
		var this_date = this.getAttribute ('data-date');
		checkDate(this_date);
	});
	
}







