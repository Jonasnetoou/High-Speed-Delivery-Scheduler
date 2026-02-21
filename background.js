// background.js v41 - V13-Like (Recarga via mensagem)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "reloadPage") {
        if (sender.tab && sender.tab.id) {
            chrome.tabs.reload(sender.tab.id, { bypassCache: true });
        }
    }
});
