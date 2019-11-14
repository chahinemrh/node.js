//const EventEmitter = require('events').EventEmitter;
const {EventEmitter} = require('events');


function empty() {

//instantiate emitter
  const myEmitter = new EventEmitter();


//set my event
  myEmitter.on('hi',function() {
    console.log('Hello World')
  })

  //callin my event
  myEmitter.emit( 'hi' )

 }
/////////////////////////////////////////////////////////////
function withArgs(data){
  const myEmitter = new EventEmitter();

  myEmitter.on('newFellow', args => {

    if (typeof args === 'string') {
      console.log(`Here comes a new pirarte ${args}` )
    } else if (Array.isArray(args)) {
      for ( const name of args ){
        console.log (`Here comes a new pirarte ${name}`)
      }}
       else  {console.log (`sorry type ${typeof args} not implemented`) }

    })
  
  
  

  myEmitter.emit( 'newFellow',data )

}
/////////////////////////////////////////////////////////
//ex03

class MyEventEmitter {
  constructor() {
    this.events = {} 
   }
   
   on(eventName, callback){
     this.events[eventName] = callback
   }
   emit(eventName, ...data){
    //this.events[eventName] () ou plus simplement
    const callback = this.events[eventName]
    if (callback !== undefined) {
      callback(...data)
    
    }
   }
}





 module.exports =  {
   //empty : empty comme ma clé a le meme nom que ma function donc :
   empty,
   withArgs,
   MyEventEmitter
 }