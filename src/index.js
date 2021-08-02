module.exports = function toReadable (number) {
  let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  if (number == 0) {
    return 'zero';
  } else if (number < 10) {
    return units[number-1];
  } else if (number >= 10 && number < 20) {
    return teens[number%10];
  }
}
