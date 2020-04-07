function successCallback(result) {
    console.log("It succeeded with " + result);
  }
  
  function failureCallback(error) {
    console.log("It failed with " + error);
  }
function doSomething()
  const promise = doSomething(); 
  promise.then(successCallback, failureCallback);
  