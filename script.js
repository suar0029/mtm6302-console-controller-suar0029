// 1.
const $title = document.getElementById('title')
function setTitle(NewTitle){
    $title.textContent = NewTitle
}
//2.
const $paragraph = document.getElementById('paragraph')
function setDescription(NewDescription){
    $paragraph.textContent = NewDescription
}
//3.
function setBackgroungColor(newcolor){
    document.body.style.backgroundColor = newcolor;
}
//4.
function setFontColor(newfontcolor){
    document.body.style.color = newfontcolor;
}
//5.
const $theme = document.getElementById('body')

function setTheme() {
  $theme.classList.toggle('dark')
}