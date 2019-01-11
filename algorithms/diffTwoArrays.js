// https://codesnippet.io/diff-two-arrays/

function diffArray(arr1, arr2) {
  var newArr = [];

    for (var i in arr2) {
        if (arr1.indexOf(arr2[i]) === -1) {
            newArr.push(arr2[i])
        }
      }
      for (var i in arr1) {
          if (arr2.indexOf(arr1[i]) === -1) {
              newArr.push(arr1[i])
          }
      }
    	
  return newArr;
}
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
// diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
// diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

