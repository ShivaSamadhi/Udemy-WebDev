const fs = require(`fs/promises`)


 const readFile = async () => {
    let fileData
        //Callbacks
        // fs.readFile(`data.txt`, function (e, fileData){
        //     console.log(fileData.toString())
        // })
    //readFileSync is a synchronous method, the rest of the code will not execute until this process completes
    //readFile is asynchronous but requires a callback function which will execute once the process completes

    //Promises
    // fs.readFile(`data.txt`)
    //     .then(function (fileData) {
    //         console.log(fileData.toString())
    //     })
    //     .catch(e =>{
    //         console.log(e)
    //     })
    //
    // console.log(`Hi there`)

     //Async Await
     fileData = await fs.readFile(`data.txt`)
}

readFile()