const capitalize = function (string) {
  let caps = string[0].toUpperCase()
  let slice = string.slice(1);
  let lower = slice.toLowerCase();
  
  return caps + lower
  };
  

module.exports = capitalize;