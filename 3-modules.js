// Common JS, every file is a module
// Modules, Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-util')

require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)