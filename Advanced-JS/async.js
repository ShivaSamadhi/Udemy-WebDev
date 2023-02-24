const fs = require(`fs`)

//Custom error handling w/ try/catch
const readFile = () => {

        const fileData = fs.readFileSync(`data.txt`)
        //This code will fail because data.json doesnt exist. W/o the try catch, any code after this line would not execute

    console.log(fileData.toString())


    console.log(`Hi there`)
}

readFile()