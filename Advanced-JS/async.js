const fs = require(`fs`)

const stringifyFile = ()

const readFile = () => {

        const fileData = fs.readFile(`data.txt`, )
    //readFileSync is a synchronous method, the rest of the code will not execute until this process completes
    //readFile is asynchronous but requires a callback function which will execute once the process completes

    console.log(fileData.toString())


    console.log(`Hi there`)
}

readFile()