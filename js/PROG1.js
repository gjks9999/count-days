


function days() {
	"use strict";
	var  bday, bmon, byear, D = 0, ll = 0, tempyear = 0, tempmonth, thisyear, thismonth, thisday, today, p = 0;

        
	bday = document.getElementById("einput").value;
	bmon = document.getElementById("finput").value;
	byear = document.getElementById("ginput").value;
    
	today = new Date();
    thisday = today.getDate();
    thismonth = today.getMonth() + 1;
    thisyear = today.getFullYear();
    
    for (tempyear = byear; tempyear < thisyear; tempyear += 1, D += 1) {
		for (tempmonth = 1; tempmonth < 13; tempmonth += 1) {
			if (ll === 0) {
				tempmonth = bmon;
			}
			if (((tempmonth % 2 === 0) && (tempmonth !== 10) && (tempmonth !== 12)) || ((tempmonth === 9) || (tempmonth === 11))) {
				if (ll === 0) {
					p = bday;
				} else {
					p = 0;
				}
				if ((tempmonth === 2) && (tempyear % 4 === 0)) {
					D = D + (29 - p);
					ll += 1;
				} else if ((tempmonth === 2)) {
					D = D + (28 - p);
					ll += 1;
				} else {
					D = D + (30 - p);
					ll += 1;
				}
			} else {
				if (ll === 0) {
					p = bday;
				} else {
					p = 0;
				}
				D = D + (31 - p);
				ll += 1;
			}
		}
	}
		
	for (tempmonth = 1, tempyear = thisyear; tempmonth < thismonth; tempmonth += 1) {
		if (ll === 0) {
			tempmonth = bmon;
		}
		
		if (((tempmonth % 2 === 0) && (tempmonth !== 10) && (tempmonth !== 12)) || ((tempmonth === 9) || (tempmonth === 11))) {
			if ((tempmonth === 2) && (tempyear % 4 === 0)) {
				D = D + 29;
				ll += 1;
			} else if ((tempmonth === 2)) {
				D = D + (28);
				ll += 1;
			} else {
				D = D + 30;
				ll += 1;
			}
			
		} else {
			D = D + 31;
			ll += 1;
		}
	}
	D = D + thisday;
	document.getElementById("demo").innerHTML += "hello friend...!" + "<br>";
	document.getElementById("demo").innerHTML += " your current day:"  + D;
        
	document.getElementById("demo").innerHTML += "<br>" + " your spended hours:(approx)=" + (D * 24);
	document.getElementById("demo").innerHTML += "<br>" + "your date of birth  is:"  + bday + " / " + bmon + " / " + byear;
	document.getElementById("demo").innerHTML += "<br>" + "Today date is:"  + thisday + " / " + thismonth + " / " + thisyear;
	
}
  
