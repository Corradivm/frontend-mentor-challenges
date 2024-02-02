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
  const rating = document.getElementsByClassName('active')[0]
  let ratingValue;

  if (rating == undefined) {
    animation()
    return;
  }
 
  ratingValue = document.getElementsByClassName('active')[0].value;
  
  document.getElementById('warning-card').style.display = 'none';
  document.getElementById('rating-card').style.display = 'none';
  document.getElementById('thank-you-card').style.display = 'block';
  document.getElementById('output').innerHTML = `You selected ${ratingValue} out of 5`;
}

function animation() {
  const card = document.getElementById('warning-card');

  card.style.animation = "appear 0.3s ease-out";
  card.style.top = "0px";

  setTimeout(goback, 4000)
}

function goback() {
  const card = document.getElementById('warning-card');

  card.style.animation = "goback 0.6s ease-in";
  card.style.top = "-50px";
}
