//Version: 2.9.4
//NOADS - is a ad blocker by (c)killercodes.github.io
function getBlacklistUrls(){	
	var  urls = [
    "*://*.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.moat.com/*",
    "*://*.taboola.com/*",
    "*://*.pubmine.com/*",
    "*://*.adroll.com/*",
    "*://*.clmbtech.com/*",
	  "*://pricee.com/*",
	  "*://*.lijit.com/*",
	  "*://*.rubiconproject.com/*",
	  "*://*.vidoomy.com/*",
	  "*://*.amazon-adsystem.com/*"
	];

	return urls; 
};

(async () => {
  var dummyCallback = function (details) {
    return {
      cancel: true
    };
  };

  var list = getBlacklistUrls();
  //console.log(list);
  var blockedUrls = { urls: list };

  //Add Listener
  chrome.webRequest.onBeforeRequest.addListener(dummyCallback,blockedUrls,["blocking"]);
})();
