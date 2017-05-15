

//window.days = function () {
function days() {
	"use strict";
	var a, c, d, e, f, g, D = 0, ll = 0, y, m, yyyy, mm, dd, today, p = 0;
	
    a = document.getElementById("form1");
	c = document.getElementById("form2");
	d = document.getElementById("form3");
	e = a.elements["b1[]"].value;
	f = c.elements["b2[]"].value;
	g = d.elements["b3[]"].value;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();
    
    for (y = g; y < yyyy; y += 1, D += 1) {
		for (m = 1; m < 13; m += 1) {
			if (ll === 0) {
				m = f;
			}
			if (((m % 2 === 0) && (m !== 10) && (m !== 12)) || ((m === 9) || (m === 11))) {
				if (ll === 0) {
					p = e;
				} else {
					p = 0;
				}
				if ((m === 2) && (y % 4 === 0)) {
					D = D + (29 - p);
					ll += 1;
				} else if ((m === 2)) {
					D = D + (28 - p);
					ll += 1;
				} else {
					D = D + (30 - p);
					ll += 1;
				}
			} else {
				if (ll === 0) {
					p = e;
				} else {
					p = 0;
				}
				D = D + (31 - p);
				ll += 1;
			}
		}
	}
		
	for (m = 1, y = yyyy; m < mm; m += 1) {
		if (((m % 2 === 0) && (m !== 10) && (m !== 12)) || ((m === 9) || (m === 11))) {
			if ((m === 2) && (y % 4 === 0)) {
				D = D + 29;
			} else if ((m === 2)) {
				D = D + (28);
			} else {
				D = D + 30;
			}
			
		} else {
			D = D + 31;
		}
	}
	D = D + dd;
	document.getElementById("demo").innerHTML += "hello friend...!" + "<br>";
	document.getElementById("demo").innerHTML += "your current day:"  + D;
        
	document.getElementById("demo").innerHTML += "<br>" + "your current hour:(approx)" + (D * 24);
}
  
