// https://codesnippet.io/confirm-the-ending/

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding('Open sesame', 'same');
