/**
 * Create combined class names based on conditions
 * @param args One or more arguments of type string or object
 */
const classNames = (...args) => {
  const cssClasses = [];
  for (const arg of args) {
    if (typeof arg === "string") {
      cssClasses.push(arg);
    } else if (typeof arg === "object") {
      // Read through all keys and in case their value translates to true,
      // append it to cssClasses, else ignore
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          cssClasses.push(key);
        }
      });
    }
  }
  return cssClasses.join(" ");
};

export { classNames };
