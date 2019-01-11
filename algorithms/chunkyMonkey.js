// https://codesnippet.io/chunky-monkey/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  var res = []; // stores the final result
  var temp = []; // used to store the sub-arrays that will be pushed to res
 
  for (var i in arr) {
  
    if (temp.length === size) { // Once temp equals size
		res.push(temp); // Push temp to res
		temp = []; // Reset temp
	}
    
    temp.push(arr[i]); // Push arr items to temp
  }
  res.push(temp); // Push remaining items to res
 
  return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // should return [["a", "b"], ["c", "d"]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // should return [[0, 1], [2, 3], [4, 5]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) // should return [[0, 1, 2, 3], [4, 5]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) // should return [[0, 1, 2], [3, 4, 5], [6]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]


