function onError(error) {
    console.error(`Error: ${error}`);
}

function logTabs(tabs) {
    var tabsMsg = "";
    tabs.forEach(function (tab) {
        tabsMsg += `\n\nTitle: ${tab.title}\nURL: ${tab.url}\nActive: ${tab.active}\n----------------------------------`;
    });

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            type: "curx_url_spy",
            tabsMsg: tabsMsg
        }, function (response) { });
    });
}

function checkTabs() {
    chrome.tabs.query({}, logTabs);
}

chrome.browserAction.onClicked.addListener(() => {
    checkTabs();
});