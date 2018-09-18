# conditional-chain
Bring some logic to js waterfalls


**Before:**
```
let num = Math.pow(2, 10)
if (isEngineeringMode) num = num.toExponential()
if (toUpper) num = num.toUpperCase()
return num
```

**After:**
```
const num = cond(Math.pow(2, 10))
  .if(isEngineeringMode, num => num.toExponential())
  .if(toUpper, num => num.toUpperCase())
  .end()

return num
```
