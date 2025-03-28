// Will throw a TypeError if object 'o' does not have property 'value'
function accessProperty(o) {
  const {value} = o;
  return value;
}

module.exports = {accessProperty};
