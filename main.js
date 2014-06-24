// random notes: 123-456-789

var wtf = function() {
	alert("Nice try! But read the directions.")
}

// check if numbers in right place
// check if dashes in right place
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
	else if (phone[3] != '-' || phone[6] != '-') {
		wtf();
		return phone_val();
	}
}

phone_val();
alert("Thank you!")


