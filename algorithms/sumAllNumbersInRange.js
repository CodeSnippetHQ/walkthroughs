// https://codesnippet.io/sum-all-numbers-in-a-range/

function sumAll(arr) {

	var res = 0;
	// Sort array low to high
	arr.sort((a,b) => {
		return a - b;
	});
	
	for (var i = arr[0]; i <= arr[1]; i++) {
		
		res += i;

	}
	return res;
}

sumAll([4, 1]); // Returns 10

