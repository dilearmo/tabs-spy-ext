chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == "curx_url_spy") {
        //console.log(`${request.tabsMsg}`);
        alert(`${request.tabsMsg}`);
    } else if (request.type == "minimized_window_msg") {
        alert(`${request.mnzd_msg}`);
    }
    sendResponse();
    return true;
});