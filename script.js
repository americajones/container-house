const boxes = document.querySelectorAll('.box');
let i = 0;
boxes.forEach(box => {
    box.setAttribute('id', i);
    i++;
})

function dragBox(box) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    box.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        box.style.top = (box.offsetTop - pos2) + "px";
        box.style.left = (box.offsetLeft - pos1) + "px";
        console.log(pos3, pos4);
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


function rotateBox() {
    if (this.classList.contains('rotated')) {
        this.classList.remove('rotated');
        this.classList.add('rotatedAgain');
    } else if (this.classList.contains('rotatedAgain')) {
        this.classList.remove('rotatedAgain');
        this.classList.add('rotatedAgainAgain');
    } else if (this.classList.contains('rotatedAgainAgain')) {
        this.classList.remove('rotatedAgainAgain');
    } else {
        // this.style.transform = 'rotate(90deg)';
        this.classList.add('rotated');
    }
}

// let save = document.querySelector('.save');
// save.addEventListener('click', localSave);

// function localSave() {

//     boxes.forEach(box => {
//         console.log(box.id);
//         console.log(box.classlist);
//         console.log('TOP NUM??: ', box.style.offsetTop)
//         id= box.id;
//         // localStorage.setItem(id, location)
//     })
// }
// let load = document.querySelector('.load');
// load.addEventListener('click', rearrange);

//get classlist of each item so i can reassign classes on load
//get style top and left px

// function rearrange() {

// }

boxes.forEach(box => {
    dragBox(box);
    box.addEventListener('dblclick', rotateBox)
});