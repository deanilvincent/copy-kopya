function copy(obj) {
  if (obj === null) return undefined;
  /**
   * Copy properties from the original object to the clone
   * @param {Object|Function} clone The cloned object
   */
  function copyProps(clone) {
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = copy(obj[key]);
      }
    }
  }

  /**
   * Create an immutable copy of an object
   * @return {Object}
   */
  function cloneObj() {
    let clone = {};
    copyProps(clone);
    return clone;
  }

  /**
   * Create an immutable copy of an array
   * @return {Array}
   */
  function cloneArr() {
    return obj.map(function (item) {
      return copy(item);
    });
  }

  /**
   * Create an immutable copy of a Map
   * @return {Map}
   */
  function cloneMap() {
    let clone = new Map();
    for (let [key, val] of obj) {
      clone.set(key, copy(val));
    }
    return clone;
  }

  /**
   * Create an immutable clone of a Set
   * @return {Set}
   */
  function cloneSet() {
    let clone = new Set();
    for (let item of obj) {
      clone.add(copy(item));
    }
    return clone;
  }

  /**
   * Create an immutable copy of a function
   * @return {Function}
   */
  function cloneFunction() {
    let clone = obj.bind(this);
    copyProps(clone);
    return clone;
  }

  //
  // Inits
  //

  // Get object type
  let type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

  // Return a clone based on the object type
  if (type === "object") return cloneObj();
  if (type === "array") return cloneArr();
  if (type === "map") return cloneMap();
  if (type === "set") return cloneSet();
  if (type === "function") return cloneFunction();
  return obj;
}

module.exports = { copy };
