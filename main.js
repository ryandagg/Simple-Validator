// random notes: 123-456-789

var wtf = function() {
	alert("Nice try! But read the directions.")
}

// phone validation
var phone_val = function() {
	var phone = prompt("Gimme them digits! (with dashes)");
	if(phone.length != 12) {
		wtf();
		return phone_val();
	}
	else if (/[a-z!@#$%^&*~`]/gi.test(phone.replace(/-/g, ''))) {
		wtf();
		return phone_val();
	}
	else if (phone[3] != '-' || phone[7] != '-') {
		wtf();
		return phone_val();
	}
	else {
		alert("Thank you!")
	}
}

phone_val();


// Birth date val
var b_date = function() {
	var bday = prompt("When were you born? (this format: (MM/DD/YY)");
	if(bday.length != 8) {
		wtf();
		return b_date();
	}
	else if (/[a-z!@#$%^&*~`]/gi.test(bday.replace(/\//g, ''))) {
		wtf();
		return b_date();
	}
	else if (bday[2] != '/' || bday[5] != '/') {
		wtf();
		return b_date();
	}
	else if (String(bday.substring(0,2)) > 12 || String(bday.substring(3,5)) > 31) {
		wtf();
		return b_date();
	}
	else {
		alert("Thank you!")
	}
}

b_date();

//  Postal Code val
var postal_val = function() {
	var postal = prompt("What's your zip? (this format: (XXXXX OR XXXXX-XXXX)");
	if(postal.length != 5 && postal.length != 10) {
		wtf();
		return postal_val();
	}
	else if (/[a-z!@#$%^&*~`]/gi.test(postal.replace(/-/g, ''))) {
		wtf();
		return postal_val();
	}
	else if (postal[5] != '-' && postal.length === 10) {
		wtf();
		return postal_val();
	}
	else {
		alert("Thank you!")
	}
}

postal_val();

// State abbreviation
var st_val = function() {
	var state = prompt("What's your state? (this format: 2 letters, all CAPS");
	if(state.length != 2) {
		wtf();
		return st_val();
	}
	else if (/[1-9a-z!@#$%^&*~`]/g.test(state)) {
		wtf();
		return st_val();
	}
	else {
		alert("Thank you!")
	}
}

st_val();

// Marital status
var married_val = function() {
	var married = prompt("Are you married? Yes or no?");
	if(married.toLowerCase() != 'no' && married.toLowerCase() != 'yes') {
		wtf();
		return married_val();
	}
	else {
		alert("Thank you!")
	}
}

married_val();