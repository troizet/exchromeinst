chrome.runtime.onMessage.addListener(function(msg, sender ,sendResponse){
   // if(msg.text === 'mcall'){
       // let images = document.getElementsByTagName('img');
        let images = document.getElementsByTagName('img');
        console.log(images[0].src);
       // chrome.downloads.download({ url: images[0].src });
        sendResponse(images[0].src);
      //  chrome.runtime.sendMessage(images[0].src);
   // }
});