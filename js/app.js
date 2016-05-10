var guestInput;
console.log(guestInput);

var getAndCheckUserGuest = function () {
	guestInput = prompt();
	if (!parseInt(guestInput)) {
		alert("Please enter a number.");
		getAndCheckUserGuest();
	}
	else if (Math.round(guestInput) != guestInput) {
		alert("Please enter a whole number.");
		getAndCheckUserGuest();
	}
	else {
		for (var i = 1; i <= guestInput; i++) {
			if (i%3 == 0 && i%5 == 0) {
				document.write('fizzbuzz</br>');
			} 
			else if (i % 5 == 0) {
				document.write('buzz</br>');
			}
			else if (i % 3 == 0) {
				document.write('fizz</br>');
			}
			else {
				document.write(i + '</br>');
			}
		}
	}
};
getAndCheckUserGuest();