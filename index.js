var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({}, object, {[key]: value});
  return newRecipes;
  return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}
