chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (currentTab) => {
    if (/^https:\/\/www/.test(currentTab.url)) {
      chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => {
        chrome.tabs.insertCSS(null, { file: "./styles.css" });
        console.log("background running");
      });
    }
  });
});
