browser.runtime.onMessage.addListener(request => {
    window.alert(request.tabsMsg);
    return Promise.resolve({ });
});