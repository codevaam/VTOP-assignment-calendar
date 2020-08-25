  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({csvRows: [["Subject", "Start Date"]]}, function() {
      console.log('variable set to []');
    })
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'vtop.vit.ac.in'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
