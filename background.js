chrome.pageAction.onClicked.addListener(function(tab){
    chrome.tabs.sendMessage(tab.id, {text: 'mcall'}, showResult);
});

function showResult(result){
    result.forEach(function(element, index){
        chrome.downloads.download({ url: element});
    });
}

chrome.runtime.onInstalled.addListener(function(){
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'instagram'},
                    })
                ],

                actions: [new chrome.declarativeContent.ShowPageAction()]

            }
        ]);
    });
});