class eventEmitter  {
    constructor() {
      this.events = Object.create(null);
    }

  subscribe (eventName, listener) {
      if(!Object.hasOwn(this.events, eventName)) {
       this.events[eventName] = [];
     }
     if(Array.isArray(listener)) {  /** to support multiple listeners */
        listener.forEach((item) =>{
          this.events[eventName].push(item);
        })
     } else {
       this.events[eventName].push(listener);
     }
    
   }

   unsubscribe (eventName, listener) {
     if(!Object.hasOwn(this.events, eventName)){
        return;
     }
   const listners = this.events[eventName];
  const foundIndex = listners.findIndex((item) => item === listener);
  if(foundIndex != -1) {
    this.events[eventName].splice(foundIndex, 1);
  }

       
 }
   emit (eventName, ...args) {
    if(!Object.hasOwn(this.events, eventName)){
      return;
   }
   
   const listners = this.events[eventName];
  for(var index = 0; index < listners.length; index ++) {
            listners[index].apply(null, args);
    }
      
    }
  }

var obj = new eventEmitter();
const show1 = function () {
  console.log("i am called topic2");
}
obj.subscribe("topic1", [function show(b) {
    console.log("i am called topic1", b);
}, show1]);
obj.subscribe("topic1", function show2(a) {
    console.log("i am called topic3", a);
});


obj.emit("topic1", 34);
obj.unsubscribe("topic1", show1)
obj.emit("topic1", 34);

obj.subscribe("topic2", function show2(a) {
  console.log("i am called topics", a);
});
obj.emit("topic2", 35);