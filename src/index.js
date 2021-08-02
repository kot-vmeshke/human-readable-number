module.exports = function toReadable (number) {
  let units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
      tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  if (number == 0) {
    return 'zero';
  } else if (number < 10) {
    return units[number-1];
  } else if (number >= 10 && number < 20) {
    return teens[number%10];
  } else if (number >= 20 && number < 100) {
    let ten = (Math.floor(number/10))-2;
    let unit = (number%10)-1;
    return `${tens[ten]} ${units[unit]}`;
  } else if (number%100 == 0) {
    return `${units[(number/100)-1]} hundred`;
  }
}
