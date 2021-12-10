// src/treeWalker/traversingService.ts
function getTextNodes(node) {
  console.warn(node);
  if (node) {
    return NodeFilter.FILTER_ACCEPT;
  }
  return NodeFilter.FILTER_REJECT;
}
function initializeScript() {
  console.warn("hello");
  const root = document.body;
  const whatToShow = NodeFilter.SHOW_TEXT;
  document.createTreeWalker(root, whatToShow, {
    acceptNode: getTextNodes
  });
}
initializeScript();
//# sourceMappingURL=traversingService.js.map
