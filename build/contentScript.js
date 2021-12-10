(() => {
  // src/messagesService.ts
  var MESSAGE;
  (function(MESSAGE2) {
    MESSAGE2["PAGE_LOADED"] = "PAGE_LOADED";
  })(MESSAGE || (MESSAGE = {}));

  // src/contentScript.ts
  (function sendMessageFromTab() {
    chrome.runtime.sendMessage({ message: MESSAGE.PAGE_LOADED });
  })();
})();
//# sourceMappingURL=contentScript.js.map
