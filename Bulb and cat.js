function Off() {
    document.getElementById("Bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("Cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("SwithStatus").textContent = "Switched Off";
    document.getElementById("Off").style.backgroundColor = "#22c55e";
    document.getElementById("on").style.backgroundColor = "#cbd2d9";
}

function On() {
    document.getElementById("Bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("Cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("SwithStatus").textContent = "Switched On";
    document.getElementById("Off").style.backgroundColor = "#e12d39";
    document.getElementById("on").style.backgroundColor = "#cbd2d9";
}