var chkButton = document.querySelector("#chk");
var rstButton = document.querySelector("#rst");
var text = document.querySelector("#txt");

function countVowels() {
    var txt = text.value;
    let vowelCount = 0;
    for (ch of txt) {
        if ("aeiouAEIOU".includes(ch))
            vowelCount++;
    }
    alert("Number of vowels in the text is " + vowelCount + ".");
}

chkButton.addEventListener('click', function(e) {
    if (document.getElementById("txt").value == '')
        alert("Enter some text!");
    else
        countVowels();
})

rstButton.addEventListener('click', function(e) {
    text.value = '';
})