// index.js

function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This function is named");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This function is anonymous");
    };
  }
  