// https://codesnippet.io/find-the-longest-word-in-a-string

function findLongestWordLength(str) {
    var wordArr = str.split(' ');
    var count = 0;
    
    for(i = 0; i < wordArr.length; i++) {
		if(wordArr[i].length > count) {
			count = wordArr[i].length;
		}
	}
    return count;
};

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // Output: 6
