function btnPressed () {
    var element = document.getElementById("clicks");
    var value = element.innerHTML;

    ++value;
    console.log(value);
    document.getElementById("clicks").innerHTML = value;

}

var slider = document.getElementById("rangeRed");
var output = document.getElementById("colorOutput");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

var slider = document.getElementById("rangeGreen");
var output = document.getElementById("colorOutput");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

var slider = document.getElementById("rangeBlue");
var output = document.getElementById("colorOutput");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

function changeBackground() {
    var rd = parseInt(document.getElementById("rangeRed").value);
    var gn = parseInt(document.getElementById("rangeGreen").value);
    var bl = parseInt(document.getElementById("rangeBlue").value);
    

    var rdhex = (rd < 16) ? "0" + rd.toString(16) : rd.toString(16);
    var gnhex = (gn < 16) ? "0" + gn.toString(16) : gn.toString(16);
    var blhex = (bl < 16) ? "0" + bl.toString(16) : bl.toString(16);

    var hexcode = "#" + rdhex + gnhex + blhex;

    document.body.style.backgroundColor = hexcode;
    document.getElementById("colorOutput").innerHTML = hexcode;
}



