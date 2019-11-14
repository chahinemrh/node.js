const {empty, withArgs, MyEventEmitter} = require("./eventbox")

//empty()
//withArgs(['Luffy','Zoro'])
const em = new MyEventEmitter()

const unsusbcribe = em.on('hello', () => {
    console.log(`Hello world`)
})

em.on('hello', function(first, last) {
    console.log(`Hello ${first} ${last}`)
})
 

// cancel hello
unsusbcribe  ()
em.emit('hello')
em.emit('hello','Majdi','Chahine')
em.emit('unknown')