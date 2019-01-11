// https://codesnippet.io/wherefore-art-thou/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source)
  var srcVals = Object.values(source);
  var srcKeyCount = 0;
  
  collection.filter((obj, i) => {
      
      let objKeys = Object.keys(obj) // Get the keys of current object
      let objVals = Object.values(obj) // Get the values of current object
      
      for (var j in objKeys) {
          if (!obj.hasOwnProperty(srcKeys[j])) {
            srcKeyCount = 0; // Reset srcKeyCount to zero
          }
          if (obj.hasOwnProperty(srcKeys[j]) && objVals[j] == srcVals[j]) {
            srcKeyCount++
          }
          if (srcKeyCount === srcKeys.length || srcKeys.length === 1 && objVals[j] == srcVals) {
              arr.push(obj)
              srcKeyCount = 0;  
          }
      }
  })
  
  // Only change code above this line
  return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
// Should return [{ "apple": 1, "bat": 2, "cookie": 2 }]

