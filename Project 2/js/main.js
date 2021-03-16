
var redValue = 255;
var blueValue = 255;
var greenValue = 255;
var alphaValue = 1;

function updateSpan() {
    document.getElementById('redValue').innerText = redValue;
    document.getElementById('blueValue').innerText = blueValue;
    document.getElementById('greenValue').innerText = greenValue;
    document.getElementById('alphaValue').innerText = alphaValue;
}

function changeBackground(string, value) {
    if(string == 'red') {
        redValue = value;
    } else if(string == 'green') {
        greenValue = value;
    } else if(string == 'blue') {
        blueValue = value;
    } else {
        alphaValue = value;
    }
    document.body.style.backgroundColor = "rgba(" + redValue + ", " + greenValue + ", " + blueValue + ", " + alphaValue + ")";
    var labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.color = "rgb(" + (255-redValue) + ", " + (255-greenValue) + ", " + (255-blueValue) + ")";
    });
    updateSpan();
}
changeBackground('alpha', 1);
updateSpan();