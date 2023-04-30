let link = 'pogodairadar.com.ua'
let scale = getComputedStyle(phone).getPropertyValue("transform").match(/^matrix\(([^\(]*)\)$/)[1].split(',').map(Number)[0]
let rotate = 0

updateClock()
setInterval(updateClock, 15000);
function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }


  let timeNow = hours + ":" + minutes;
  time.innerHTML = timeNow
}

showLink()

linkBar.onclick = cleanLinkBar
list.onclick = clickToCopy
scaleMinus.onclick = zoomOut
scalePlus.onclick = ZoomIn
rotateToRight.onclick = turnRight
rotateToLeft.onclick = turnLeft

function cleanLinkBar() {
  linkBar.value = ''
  site.src = `https://${link}`
  showLink()
}

function showLink() {
linkBar.value = linkBar.value
 // linkBar.value = site.src.substring(8);
}

function clickToCopy(e) {
  link = e.target.innerHTML
  navigator.clipboard.writeText(e.target.innerHTML)
}

function zoomOut(){
  scale = scale - 0.1
  phone.style.transform = `scale(${scale})`
}

function ZoomIn(){
  scale = scale + 0.1
  phone.style.transform = `scale(${scale})`
}

function turnRight(){
  rotate = rotate + 20
  phoneRotate.style.transform = `rotate(${rotate}deg)`

}

function turnLeft(){
  rotate = rotate - 20
  phoneRotate.style.transform = `rotate(${rotate}deg)`
  
}
