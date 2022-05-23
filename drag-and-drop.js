var dragItem = document.getElementById('drag');
dragItem.addEventListener('dragstart',drag_start,false);
document.body.addEventListener('dragover',drag_over,false);
document.body.addEventListener('drop',drop,false);


function drag_start(event) {
    dragItem.style.opacity = '0.4';
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
        (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
    event.dataTransfer.effectAllowed = "move";

}
function drag_over(event) {
    event.preventDefault();
    return false;
}
function drop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dragItem = document.getElementById('drag');
    dragItem.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dragItem.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    dragItem.style.opacity = '1';
    event.preventDefault();
    return false;
}
