function getPropertyValue(node, property) {
  return window.getComputedStyle(node)
          .getPropertyValue(property)
            .replace('px', '')
}
