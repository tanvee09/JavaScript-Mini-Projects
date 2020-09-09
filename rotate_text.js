function animate_string() {
    var text = document.getElementById("txt").value;

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        document.getElementById("cool_text").innerHTML = text;
    }, 200);
}