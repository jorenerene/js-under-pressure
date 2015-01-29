// http://toys.usvsth3m.com/javascript-under-pressure/

function doubleInteger (i) {
	// i will be an integer. Double it and return it.

	return i * 2;
}

function isNumberEven (i) {
	// i will be an integer. Return true if it's even, and false if it isn't.

	if ((i % 2) == 0) return true;

	return false;
}

function getFileExtension (i) {
	// i will be a string, but it may not have a file extension.
	// return the file extension (with no period) if it has one, otherwise false

	i = i.split (".");
	if (i.length == 1) return false;
	else return i [(i.length - 1)];
}

function longestString(i) {
	// i will be an array.
	// return the longest string in the array

	var longest = "";

	for (var a = 0; a < i.length; a++) {
		if (i [a].length > longest.length & typeof i [a] == "string") {
			longest = i [a];
		}
	}

	return longest;
}

var total = 0;

function arraySum (i) {
	// i will be an array, containing integers, strings and/or arrays like itself.
	// Sum all the integers you find, anywhere in the nest of arrays.

	for (var a = 0; a < i.length; a ++) {
		if (typeof i[a] === "number") total += i[a];
		else if (typeof i[a] === "object") total += arraySum (i[a]);
	}

	return total;
}