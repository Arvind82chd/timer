const inputTime = [ 10, 'i', 50, -3, 4];
if (inputTime || inputTime[i] !== Number) {
  for (i = 0;i < inputTime.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, (inputTime[i] * 1000));
  } return null
}