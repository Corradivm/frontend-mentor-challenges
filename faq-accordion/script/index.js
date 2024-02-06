defaulDetail()

function defaulDetail() {
  document.getElementsByClassName('details')[0].setAttribute("open", "")
  document.getElementsByClassName('svg')[0].setAttribute("src", "assets/images/icon-minus.svg")
}

function closeFunction(n) {
  let i;
  for (i = 0;i < 4; i++) {
    document.getElementsByClassName('details')[i].removeAttribute("open")
    document.getElementsByClassName('svg')[i].setAttribute("src", "assets/images/icon-plus.svg")
  }
  document.getElementsByClassName('svg')[n-1].setAttribute("src", "assets/images/icon-minus.svg")
}
