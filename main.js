const {empty, withArgs, MyEventEmitter} = require("./eventbox")

//empty()
//withArgs(['Luffy','Zoro'])
const em = new MyEventEmitter()

em.on('hello', () => {
    console.log(`Hello world`)
})

em.on('hello', function(first, last) {
    console.log(`Hello ${first} ${last}`)
})

em.emit('hello')
em.emit('hello','Majdi','Chahine')
em.emit('unknown')