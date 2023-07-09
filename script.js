const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

//function to help not to write console.log('') every time
function log (message) {
    console.log(message)
}

function dragstart () {
    //log to test funcionality
    //log('START DRAGGING')   
    dropzones.forEach((dropzone) => dropzone.classList.add('highlight')) 
    //this = card
    this.classList.add('is-dragging')
}

function drag () {
    //log to test funcionality
    //log('IS DRAGGING')
}

function dragend () {
    //log to test funcionality
    //log('STOP DRAGGING')
    dropzones.forEach((dropzone) => dropzone.classList.remove('highlight'))
    //this = card
    this.classList.remove('is-dragging')
}


dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
})

function dragenter() {
     //log to test funcionality
    //log('DRAG ENTER')
}

function dragover () {
     //log to test funcionality
    //log('DRAG IS OVER')
    
    //this = dropzone
    this.classList.add('over')
    const cardBeingDragging = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragging)

}

function dragleave () {
     //log to test funcionality
    //log('DRAG LEAVES')
    
    //this = dropzone
    this.classList.remove('over')
}
