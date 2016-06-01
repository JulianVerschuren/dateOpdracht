function allFunctions() {

	document.getElementById("timeToday").onclick = function () {
		var d = new Date(); //utc datum in variabele D opgeslagen
		document.getElementById("datumVandaag").innerHTML = d;


	}


	document.getElementById("start").onclick = function () {
		var d2 = new Date();
		var n = d2.getTime();
		document.getElementById("startt").innerHTML = n;

		document.getElementById("stop").onclick = function () {

			var d3 = new Date();
			var n2 = d3.getTime();
			document.getElementById("stopp").innerHTML = n2;

			document.getElementById("show").onclick = function () {

				var n3 = n2 - n;

				document.getElementById("showw").innerHTML = n3;


			}





		}



	}




}

allFunctions();