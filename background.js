chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.executeScript(null, { file: 'main.js', allFrames: true })
});
