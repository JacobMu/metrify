function getTextNodes(node: Node): number {
  console.warn(node);

  if (node) {
    return NodeFilter.FILTER_ACCEPT;
  }
  return NodeFilter.FILTER_REJECT;
}

function initializeScript(): void {
  console.warn('hello');

  const root = document.body;
  const whatToShow = NodeFilter.SHOW_TEXT;

  document.createTreeWalker(root, whatToShow, {
    acceptNode: getTextNodes,
  });
}
initializeScript();

export {};
