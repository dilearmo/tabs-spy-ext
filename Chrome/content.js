/*var firstHref = $("a[href^='http']").eq(0).attr("href");

window.alert(firstHref);*/

/*chrome.tabs.getAllInWindow(null, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        window.alert(`Título: ${tab.title}... Is Active: ${tab.active}... URL: ${tab.url}`);
        //chrome.tabs.sendRequest(tabs[i].id, { action: "xxx" });
    }
});*/

/*chrome.windows.getAll({ populate: true }, function (windows) {
    windows.forEach(function (window) {
        window.tabs.forEach(function (tab) {
            //collect all of the urls here, I will just log them instead
            console.log(tab.url);
        });
    });
});*/
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == "curx_url_spy") {
        //console.log(`${request.tabsMsg}`);
        alert(`${request.tabsMsg}`);
    }
    sendResponse();
    return true;
});