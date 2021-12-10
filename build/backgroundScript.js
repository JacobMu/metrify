// src/messagesService.ts
var MESSAGE;
(function(MESSAGE2) {
  MESSAGE2["PAGE_LOADED"] = "PAGE_LOADED";
})(MESSAGE || (MESSAGE = {}));

// src/backgroundScript.ts
(function startBackgroundScript() {
  chrome.runtime.onMessage.addListener(({ message }, sender) => {
    var _a;
    if (!((_a = sender.tab) == null ? void 0 : _a.id)) {
      return false;
    }
    if (message === MESSAGE.PAGE_LOADED) {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        files: ["./traversingService.js"]
      });
    }
    return true;
  });
})();
//# sourceMappingURL=backgroundScript.js.map
