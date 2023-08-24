function myPromise() {
    return new Promise(function (resolve, reject) {
        const status = false;
        setTimeout(function () {
            if (status) {
                resolve("ahihi");
            } else {
                reject("faile");
            }
        }, 1000);
    });
}

myPromise()
    .then((message) => {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error);
    }); // return promise
  // then() chaining
