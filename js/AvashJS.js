/* 
------------------------------------
------------------------------------
JS CODE FOR WORD AND LETTER COUNTER
------------------------------------
------------------------------------
*/

function counting() {
    let totaletters = document.getElementById("mytextarea").value.length;
    let totalwords = document.getElementById("mytextarea").value;
    let text = document.getElementById("mytextarea").value;

    totalwords = totalwords.match( /\w+/g );
    totalwords = totalwords.length;
    count = text.split(". ").length;

    document.getElementById("displaylettersresult").innerHTML = totaletters + "&nbsp" + "&nbsp";
    document.getElementById("displaywordsresult").innerHTML = totalwords + "&nbsp" + "&nbsp";
    document.getElementById("displaysentenceresult").innerHTML = count;
      
}

/* 
----------------------
----------------------
JS CODE FOR COIN TOSS
----------------------
----------------------
*/
var tails = 0;
var heads = 0;

function cointoss(){

	let randomnumber = Math.floor(Math.random() * 2) + 1;

	if (randomnumber == 1) {
		document.getElementById("tossResult").innerHTML = "Heads!"
		heads = heads + 1;
		document.getElementById("headcount").innerHTML = heads;
	}
	else if (randomnumber == 2){
		document.getElementById("tossResult").innerHTML = "Tails!"
		tails = tails + 1;
		document.getElementById("tailcount").innerHTML = tails;
	}
}
