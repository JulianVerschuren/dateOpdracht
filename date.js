

//in de eerste instantie had ik me variabele bovenaan gedefinieerd. dit zorgde ervoor dat mijn start en stop exact hetzelfde zijn.
//nu heb ik ze in de functions gedefinieerd en het werkt perfect!

document.getElementById("timeToday").onclick = function () {
	myFunction(); //start de functie hieronder aangemaakt


}; //pakt de id van de button genaamd timeToday uit me html als ik er op click. dan laat hij de functie my Function af gaan. die functie heb ik hieronder gemaakt

function myFunction() {
	var d = new Date(); //utc datum in variabele D opgeslagen
	document.getElementById("datumVandaag").innerHTML = d;

} //deze functie pakt de div datumVandaag en stopt de waarde van de variabele d op de plek van de div.in d zat dus de tijd.




document.getElementById("start").onclick = function () { //pakt de id van de button genaamd start, en start de functie startFunction die ik daarna aanmaak
	startFunction(); //start de functie startfunction hieronder aangemakt.


}


function startFunction() {
	var d2 = new Date(); //utc datum in variable d2 opgeslagen
	var n = d2.getTime(); //variable n krijgt de waarde van de milisecondes sinds 1970 doormiddel van getTime
	document.getElementById("startt").innerHTML = n; //deze functie pakt de div startt en stopt de waarde van n daarin en plaatst t in me html.
}





document.getElementById("stop").onclick = function () {
	stopFunction(); //start de stopfunctie die ik hieronder aanmaak

}

function stopFunction() {
	var d3 = new Date(); //nu stop ik hier ook weer de datum in miliscs in
	var n2 = d3.getTime(); //omdat het nu een aantal seconde later is veranderd de datum en dus ook de milisecondes op het moment dat je op stop klikt
	document.getElementById("stopp").innerHTML = n2; //waarde van n2 gaat in de div. en hoppa je antwoord!

}


document.getElementById("show").onclick = function(){


showFunction() // start de showfunctie die ik hieronder aanmaak


}

function showFunction(){
var n3 = n2 - n;

document.getElementById("showw").innerHTML = n3;


}





	


