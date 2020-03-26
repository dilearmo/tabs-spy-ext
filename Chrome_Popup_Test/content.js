var originalColor = undefined;

function changePageBackgroundColor(color) {
    if (originalColor === undefined)
        originalColor = color;
    setBackgroundColor(color);
}

function resetColor() {
    setBackgroundColor(originalColor);
}

function setBackgroundColor(color) {
    $("body").css("background-color", color);
}