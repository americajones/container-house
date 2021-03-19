const boxes = document.querySelectorAll('.box');

function dragBox(box) {
    var pos1=0, pos2=0, pos3=0, pos4=0;
    box.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e=e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e=e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        box.style.top = (box.offsetTop - pos2) + "px";
        box.style.left = (box.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function rotateBox() {
    if (this.classList.contains('rotated')) {
        console.log('ALREADY ROTATED');
        // this.style.transform = 'rotate(90deg)';
        this.classList.remove('rotated')
    } else {
        // this.style.transform = 'rotate(90deg)';
        this.classList.add('rotated');
}
}

boxes.forEach(box => {
    dragBox(box);
    box.addEventListener('dblclick', rotateBox)
});