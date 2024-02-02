defaulDetail()

function defaulDetail() {
  document.getElementsByClassName('details')[0].setAttribute("open", "")
}

function closeFunction() {
  let i;
  for (i = 0;i < 4; i++) {
    document.getElementsByClassName('details')[i].removeAttribute("open")
  }
}
