module.exports = function cond (chain) {
  return {
    if (condition, f) {
      return cond(condition? f(chain): chain)
    },
    chain (f) {
      return cond(f(chain))
    },
    end () {
      return chain
    }
  }
}
