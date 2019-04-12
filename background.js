chrome.runtime.onInstalled.addListener(function(){
    chrome.contextMenus.create({
        "id": "MyContextMenu",
        "title": "My Context Menu",
        "contexts": ["selection"]
    });
    console.log("extension installed");
});

chrome.pageAction.onClicked.addListener(function(tab){
    console.log('clicked on '+ tab.title);
   /* let images = document.getElementsByTagName('img');
    console.log(images);
   /* images.forEach(function(image, index){
        console.log(image);
    });*/
    chrome.tabs.sendMessage(tab.id, {text: 'mcall'}, showResult);

});

function showResult(result){
    //console.log("result: " +    result);
    console.log(result);
   // console.log('result length ' + result.length);
    chrome.downloads.download({ url: result });

 /* for(let i=0; i<result.length; i++){
      let element = result.item(i);
      console.log(element);
  }*/
}

chrome.runtime.onMessage.addListener(function(arg, sender, sendResponse){
   // chrome.downloads.download({ url: arg });
});

chrome.runtime.onInstalled.addListener(function(){
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'nskgortrans'},
                    })
                ],

                actions: [new chrome.declarativeContent.ShowPageAction()]

            }
        ]);
    });
});