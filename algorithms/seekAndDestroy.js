// https://codesnippet.io/seek-and-destroy/

function destroyer(arr) {
    var arr0 = arguments[0];

    for (var i = 0; i < arr0.length; i++) {
		for (var j = 0; j < arguments.length; j++) {
			if (arr0[i] == arguments[j]) {
            arr0.splice(i, 1);
			j = 0; // Reset j to zero after it has a found a number to slice
            }
		}
    }
    return arr0
}
destroyer([3, 5, 1, 2, 2], 2, 3, 5) // Should return [1]
