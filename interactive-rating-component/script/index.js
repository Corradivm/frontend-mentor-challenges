function buttonSelect(n) {
  let buttonIndex = n;
  let i;
  const buttonLength = document.getElementById('buttons').length;
  const submitButton = document.getElementById('submit');

  for (i = 0; i < buttonLength; i++) {
    document.getElementsByName('option')[i].setAttribute("class", "");
  }
  document.getElementsByName('option')[buttonIndex - 1].setAttribute("class", "active");
  submitButton.removeAttribute('disabled');
  submitButton.setAttribute('onclick', 'submit()');
  submitButton.classList.remove('disabled');
}

function submit() {
  const rating = document.getElementsByClassName('active')[0];
  document.getElementById('rating-card').style.display = 'none';
  document.getElementById('thank-you-card').style.display = 'block';
  document.getElementById('output').innerHTML = `You selected ${rating.value} out of 5`;
}
