function observerPattern () {
    var map = new Map();

 function subscribe (subject, listener) {
      if(subject) {
       map.set(subject, listener);
     }
   }

  function unsubscribe (subject) {
     if(map.get(subject)) {
        map.remove(subject);
      }
 }
  function notify (subject) {
    if(map.get(subject)) {
        const found = map.get(subject);
           if(found.length < 0) {
            console.log("no listener attached to it .. please at least one");
           
           } else {
           console.log("fopud", found);
           for(var index = 0; index < found.length; index ++) {
              found[index]();
           }
        }
    }
    
    
  }
  return {
    subscribe,
    unsubscribe,
    notify
  }
}

// var obj = observerPattern();
// obj.subscribe("topic1", [function show() {
//     console.log("i am called topic1");
// }, function show1() {
//     console.log("i am called topic2 233");
// }]);
// // obj.subscribe("topic1", function show() {
// //     console.log("i am called topic2 233");
// // });

// obj.notify("topic1");