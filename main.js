var wtf = function() {
	alert("Nice try! But read the directions.")
}

// something to replace certain characters, see if those specific characters are in the 
// correct place and check if the rest is NaN
var format_test = function(str, remove) {
	var reg = new RegExp(remove, "g");
	return isNaN(str.replace(reg, ''));
}

// just need to compare two arrays!
var check_special = function(str, special, locations) {
	var special_list = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i] === special) {
			special_list.push(i);
		}
	}
	for (var j = 0; j < special_list.length; j++) {
		if (special_list[j] !== locations[j]) {
			return true;
		}
	}
	return false;
}


// phone validation
var phone_val = function() {
	var phone = prompt("Gimme them digits! (with dashes)");
	if(phone.length != 12 || format_test(phone, "-") || check_special(phone, "-", [3, 7])) {
		wtf();
		return phone_val();
	}
}

phone_val();


// Birth date val
var b_date = function() {
	var bday = prompt("When were you born? (this format: (MM/DD/YY)");
	if(bday.length != 8 || check_special(bday, '/', [2, 5]) || format_test(bday, "/")) {
		wtf();
		return b_date();
	}
	else if (String(bday.substring(0,2)) > 12 || String(bday.substring(3,5)) > 31) {
		wtf();
		return b_date();
	}
}

b_date();

//  Postal Code val
var postal_val = function() {
	var postal = prompt("What's your zip? (this format: (XXXXX OR XXXXX-XXXX)");
	if(postal.length != 5 && postal.length != 10 || format_test(postal, "-") || (check_special(postal, '-', [5]) && postal.length === 10)) {
		wtf();
		return postal_val();
	}
}

postal_val();

// State abbreviation
var st_val = function() {
	var state = prompt("What's your state? (this format: 2 letters, all CAPS");
	if(state.length != 2 || /[1-9\W_]/g.test(state)) {
		wtf();
		return st_val();
	}
}

st_val();

// Marital status - no need to refactor
var married_val = function() {
	var married = prompt("Are you married? Yes or no?");
	if(married.toLowerCase() != 'no' && married.toLowerCase() != 'yes') {
		wtf();
		return married_val();
	}
}

married_val();

alert("Thank you!")