let recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;

  return Object.assign({}, object, [key] = value)
}
