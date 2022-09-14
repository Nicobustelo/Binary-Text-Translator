const textEl = document.getElementById('text');
const binaryEl = document.getElementById('binary');
const textarea1El = document.getElementById("textarea1");
const textarea2El = document.getElementById('textarea2');

console.log(textEl.value)

textarea1El.addEventListener('input', function getTextArea(event) {
  let insideTextArea = '';
  insideTextArea = event.target.value;
  var error = document.getElementById("error")
  if (/^[0-1\s]*$/.test(insideTextArea) !== true) {
    error.innerHTML = "<span style='color: red;'>" +
      "Only 0, 1 and space characters are valid</span><br>"
  } else {
    if (insideTextArea === '') {
      textEl.innerHTML = 'Hi!';
    } else {
      error.innerHTML = ""
      var binString = '';

      insideTextArea.split(' ').map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
      });
      console.log(binString)
      textEl.innerHTML = binString;
    }
  }
})

textarea2El.addEventListener('input', function getTextArea(event) {
  let insideTextArea2 = '';
  insideTextArea2 = event.target.value;
  console.log(insideTextArea2);
  if (insideTextArea2 === '') {
    binaryEl.innerHTML = '1001000 1101001 100001';
  } else {
    let binaryText = insideTextArea2.split('').map(function(char) {
      return char.charCodeAt(0).toString(2);
    }).join(' ');
    console.log(binaryText)
    binaryEl.innerHTML = binaryText
  }
})
