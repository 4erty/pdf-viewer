export const createElement = (tagName, attributes, children) => {
  const keys = attributes !== null && typeof attributes === 'object' ? Object.keys(attributes) : [];
  const element = document.createElement(tagName);
  if (attributes) {
    keys.forEach(key => {
      element.setAttribute(key, attributes[key]);
    });
  }

  if (children !== undefined && children !== null) {
    let arr = children;
    if (!Array.isArray(arr)) arr = [arr];
    arr.forEach(child => {
      if (typeof child === 'string' || typeof child === 'number') {
        element.appendChild(document.createTextNode(child));
        return;
      }
      element.appendChild(child);
    });
  }

  return element;
};

export const applyCss = (node, stylesObject) => {
  const keys = stylesObject !== null && typeof stylesObject === 'object' ? Object.keys(stylesObject) : [];
  if (keys.length === 0) return;

  keys.forEach(key => {
    node.style.setProperty(key, stylesObject[key]);
  });
};
