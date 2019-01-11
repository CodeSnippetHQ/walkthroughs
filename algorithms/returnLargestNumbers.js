// https://codesnippet.io/return-largest-numbers-in-arrays/

function largestOfFour(arr) {
	
	var largestNums = [];

	for(var i in arr) {
		arr[i].sort((a, b) => {
			return b-a;
            console.log(arr[i])
		});

		largestNums.push(arr[i][0]);
    }
    return largestNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Returns: [5, 27, 39, 1001]
