function pipe (funcs, initValue) {
  return funcs.reduce((prev, fn) => {
    return fn(prev)
  }, initValue)
}

module.exports = {pipe}