// https://codesnippet.io/mutations/

function mutation(arr) {

  var string1 = arr[0].toLowerCase();
  var string2 = arr[1].toLowerCase();
  
  var counter = 0;

  for (var i in string2) {
    
    if (string1.indexOf(string2[i]) !== -1) {
      counter ++;
    }
  }
  return counter === string2.length;
}
mutation(["Mary", "Aarmy"])


