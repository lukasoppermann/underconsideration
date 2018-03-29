let playSoundOnClick = (elements) => {
  let soundDone = new Audio('sound_done.wav')
  let soundAdd = new Audio('sound_add.wav')
  // add click event
  elements.forEach((element) => {
    element.addEventListener('click', (event) => {
      if(event.target.checked === true) {
        soundDone.play()
        soundDone.currentTime=0
      } else {
        soundAdd.play()
        soundAdd.currentTime=0
      }
    })
  })
}

playSoundOnClick(Array.from(document.querySelectorAll('[type="checkbox"]')))
