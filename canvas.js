canvas = document.getElementById("cvs");
cvs =canvas.getContext("2d");

radius = 20;
color = "black";
width = 20;

var mouse_event = "empty";

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown") {
        cvs.beginPath();
        cvs.strokeStyle = color;
        cvs.lineWidth = width;
        cvs.arc(current_x, current_y, radius, 0, 360);
        cvs.stroke();
    }
}
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    radius = document.getElementById("radius").value;
    color = document.getElementById("color").value;
    width = document.getElementById("width_of_line").value;

    mouse_event="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event="mouseleave";
}

function clear_out() {
    cvs.clearRect(0, 0, cvs.canvas.width, cvs.canvas.height);
}