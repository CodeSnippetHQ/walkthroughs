// https://codesnippet.io/truncate-a-string/

function truncateString(str, num) {

	if(str.length <= num) {
		return str;
	}

	if(str.length > num) {
		return str.slice(0, num) + "...";
	}
}
truncateString("A-tisket a-tasket A green and yellow basket", 8)
// truncateString("Peter Piper picked a peck of pickled peppers", 11)
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
// truncateString("A-", 1)
// truncateString("Absolutely Longer", 2)

