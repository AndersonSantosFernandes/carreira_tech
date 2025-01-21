document.getElementById('hamburger').onclick = function() {
    document.getElementById('sidebar').style.width = '350px';
    document.getElementById('overlay').style.display = 'block';
}

document.getElementById('closebtn').onclick = function() {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('overlay').onclick = function() {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('overlay').style.display = 'none';
}
