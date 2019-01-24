export const createElement = (tagName, attributes, ...children) => {
  const keys = attributes !== null && typeof attributes === 'object' ? Object.keys(attributes) : [];
  const element = document.createElement(tagName);
  if (attributes) {
    keys.forEach(key => {
      element.setAttribute(key, attributes[key]);
    });
  }

  if (typeof children !== undefined || children !== null) {
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
        return;
      }
      element.appendChild(child);
    });
  }

  return element;
};
