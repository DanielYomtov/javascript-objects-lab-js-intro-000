let recipes = new Objects();


function updateObjectWithKeyAndValue(object, key, value) {
  let obj = object[key]=value;
  return Object.assign({}, obj);
}
