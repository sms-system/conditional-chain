module.exports = function cond (chain) {
  return {
    if (condition, f) {
      return cond(condition? f(chain): chain)
    },
    end () {
      return chain
    }
  }
}
