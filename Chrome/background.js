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

// // Verifica ventanas minimizadas   El principal problema de esto es que esta extensión se ejecuta en todas las pestañas y lo estaría haciendo por cada una
// function reportMinimizedWindows(windows) {
//     for (var i = 0; i < windows.length; i++) {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {
//                 type: "minimized_window_msg",
//                 mnzd_msg: `Window #${windows[i].id} is minimized!`
//             }, function (response) { });
//         });
//     }
// }

// setInterval(() => {
//     chrome.windows.getAll(function (windows) {
//         var minimized = [];

//         for (var i = 0; i < windows.length; i++) {
//             console.log(`state: ${windows[i].state} and todo: ${windows[i]}`)
//             if (windows[i].state === "minimized") {
//                 minimized.push(windows[i]);
//             }
//         }
//         if (minimized.length > 0) {
//             reportMinimizedWindows(minimized);
//         }
//     });
// }, 5000);