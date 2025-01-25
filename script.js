const myText = document.getElementById("my-text");
const result = document.getElementById("result");
const limit = 100;

myText.addEventListener("input", function () {
    const textLength = myText.value.length;
    result.textContent = `${textLength}/${limit}`;

    if (textLength > limit) {
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    } else {
        myText.style.borderColor = "#3ba51f";
        result.style.color = "#737373";
    }
});
