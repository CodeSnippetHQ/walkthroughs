// https://codesnippet.io/where-do-i-belong/

function getIndexToIns(arr, num) {

   // Check if arr is empty
   if (arr.length === 0) {
		return 0;
   }
   
   // Sort arr
   arr.sort((a,b) => {
       return a-b;
   });
   
   // Loop through arr
   for (var i = 0; i < arr.length; i++) {
       
       // Check value of num against current iteration of arr
       if (num === arr[i] || num > arr[i-1] && num < arr[i]) {
           return i;
       }

       // Check if num belongs at end of arr
       if (num > arr[arr.length - 1]){
          return arr.length;
       }
   }
}
// getIndexToIns([10, 20, 30, 40, 50], 35) // Should return 3
// getIndexToIns([10, 20, 30, 40, 50], 30) // Should return 2
// getIndexToIns([40, 60], 50) // Should return 1
// getIndexToIns([3, 10, 5], 3) // Should return 0
// getIndexToIns([5, 3, 20, 3], 5) // Should return 2
// getIndexToIns([2, 20, 10], 19) // Should return 2
// getIndexToIns([2, 5, 10], 15) // Should return 3
getIndexToIns([], 1) // Should return 0


