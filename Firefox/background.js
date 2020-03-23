function onError(error) {
    console.error(`Error: ${error}`);
}

function logTabs(tabs) {
    var activeTab = undefined;
    var tabsMsg = "";
    for (let tab of tabs) {
        tabsMsg += `\n\nTitle: ${tab.title}\nURL: ${tab.url}\nActive: ${tab.active}\n----------------------------------`
        if (tab.active) {
            activeTab = tab;
        }
    }
    browser.tabs.sendMessage(activeTab.id,
        {
            tabsMsg: tabsMsg
        }
    ).then(response => { }
    ).catch(onError);
}

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query({}).then(logTabs).catch(onError);
});