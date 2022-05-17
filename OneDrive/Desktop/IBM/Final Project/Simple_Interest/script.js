function updateRate() {
  var rateval = document.getElementById('rate').value
  document.getElementById('rate_val').innerText = rateval
}

function compute() {
  var p = document.getElementById('principal').value
  var r = document.getElementById('rate').value
  var t = document.getElementById('years').value

  var year = new Date().getFullYear() + parseInt(years)

  var si = parseInt(p * t * r) / 100

  document.getElementById('result').innerHTML =
    'If you deposit ' +
    p +
    ',<br>at an interest rate of ' +
    r +
    '%<br>You will receive a simple interest of ' +
    si +
    ',<br>in the year ' +
    t +
    '<br>'
}

// check if the number is positive, negative or zero
function checkIsPositive() {
  var num = document.getElementById('principal').value

  if (num == 0) {
    alert('Please enter a positive number')
  } else (num < 0)
  {
    alert('Negative number not accepted')
  }
  console.log('This is a positive number')
}
