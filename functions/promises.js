// callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback("This is the callback error.", undefined)
    }, 2000);
}

getDataCallback((err, data) => {
  if(err) {
   console.log(err)
  }  else {
      console.log(data)
  }
})


// promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("This is the promise data.")
        reject("This is the promise error.")
    }, 2000);
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})