module.exports = function cond (chain) {
  return {
    if (condition, thanF, elseF) {
      return cond(condition? thanF(chain) : (
        elseF? elseF(chain) : chain
      ))
    },
    chain (f) {
      return cond(f(chain))
    },
    end () {
      return chain
    }
  }
}
