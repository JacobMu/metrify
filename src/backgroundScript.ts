import { MESSAGE } from './messagesService';

(function startBackgroundScript(): void {
  chrome.runtime.onMessage.addListener(({ message }, sender) => {
    if (!sender.tab?.id) {
      return false;
    }

    if (message === MESSAGE.PAGE_LOADED) {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        files: ['./traversingService.js'],
      });
    }
    return true;
  });
})();
