import { MESSAGE } from './messagesService';

(function sendMessageFromTab(): void {
  chrome.runtime.sendMessage({ message: MESSAGE.PAGE_LOADED });
})();
