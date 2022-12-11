function getSelector(parent: DocumentFragment | Document, selector: string) {
  const item = parent.querySelector(selector);
  if (!item) throw new Error(`Selector ${selector} didn't match any elements.`);
  return <HTMLElement>item;
}

function getTemplate(item: Element) {
  if (!item) throw new Error(`${item} didn't match any elements.`);
  return <HTMLTemplateElement>item;
}

function getFragment(item: HTMLTemplateElement) {
  if (!item) throw new Error(`${item} didn't match any elements.`);
  return <DocumentFragment>item.content.cloneNode(true);
}

export { getSelector, getTemplate, getFragment };
