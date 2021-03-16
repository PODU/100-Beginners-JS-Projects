function changeBackground() {
    var s = "0123456789ABCDEF";
    var btnColor = '#';
    var bodyColor = '#';
    for(var i=0; i<6; i++) {
        var idx = Math.floor(Math.random() * s.length)
        bodyColor += s.charAt(idx);
        btnColor += s.charAt(s.length-1-idx);
    }
    document.body.style.backgroundColor = bodyColor;
    document.getElementById("change").style.backgroundColor = btnColor;
    document.getElementById("change").style.color = bodyColor;
}
changeBackground();