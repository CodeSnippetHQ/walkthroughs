// https://codesnippet.io/reverse-a-string

function reverseString(str) {
  var reverseArr = [];

  str.split(''); // Split str into an array

  for (letter in str) { // Loop through each character in str
    reverseArr.unshift(str[letter]); // Add each character to front of reverseArr
  }

  return reverseArr.join(''); // Convert reverseArr to string
}

reverseString("hello"); // Output: "olleh"

