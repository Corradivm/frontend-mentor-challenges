function buttonSelect(n) {
  let buttonIndex = n;
  let i;
  const buttonLength = document.getElementById('buttons').length;

  for (i = 0; i < buttonLength; i++) {
    document.getElementsByName('option')[i].setAttribute("class", "");
  }
  document.getElementsByName('option')[buttonIndex - 1].setAttribute("class", "active");
  document.getElementById('submit').removeAttribute('disabled');
  document.getElementById('submit').removeAttribute('disabled');
  document.getElementById('submit').classList.remove('disabled');
}

function submit() {
  const rating = document.getElementsByClassName('active')[0];

  if (rating.value === undefined) { return; }
  document.getElementById('rating-card').style.display = 'none';
  document.getElementById('thank-you-card').style.display = 'block';
  document.getElementById('output').innerHTML = `You selected ${rating.value} out of 5`;
}
