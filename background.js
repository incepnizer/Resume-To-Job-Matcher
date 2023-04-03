document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.onUpdated.addListener((tabId, tab) => {
        if (tab.url && tab.url.includes("glassdoor.com/Job")) {
            
            const queryParameters = tab.url.split("/")[1];
            const urlParameters = new URLSearchParams(queryParameters);
            chrome.tabs.sendMessage(tabId, {
                type: "NEW",
                jobID: urlParameters.get("v")
            })
        }
    })
})

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
    }
console.log(getCurrentTab());

