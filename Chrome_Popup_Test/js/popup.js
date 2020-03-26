/*var buttons =  document.getElementsByTagName("button")

buttons.forEach(button => {
    
});*/

/*
var colors = ["green", "red", "yellow", "blue", "white", "black", "brown", "silver", "gold", "lightblue"];

colors.forEach((color) => {
    $("#buttons").append(`<button id='${color}' style='background-color: ${color};'>${color}</button>`);
});
*/
$("button").on("click", function(e) {
    $(this).text("No me toques");
    let color = $(this).attr("id");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: `changePageBackgroundColor('${color}')`});
    });

});