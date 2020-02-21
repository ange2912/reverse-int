module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
      }
  let reverseNumber = String(n).split('').reverse().join('');
  return reverseNumber;
}
