function buttonSelect(n) {
  let buttonIndex = n;
  let i;
  const buttonLength = document.getElementById('buttons').length;

  for (i = 0; i < buttonLength; i++) {
    document.getElementsByName('option')[i].setAttribute("class", "");
  }
  document.getElementsByName('option')[buttonIndex - 1].setAttribute("class", "active");
}

function submit() {
  const ratingValue = document.getElementsByClassName('active')[0].value;

  document.getElementById('rating-card').style.display = 'none';
  document.getElementById('thank-you-card').style.display = 'block';
  document.getElementById('output').innerHTML = `You selected ${ratingValue} out of 5`;
}
