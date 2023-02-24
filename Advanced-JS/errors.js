const fs = require(`fs`)

//Custom error handling w/ try/catch
const readFile = () => {
  try {
    const fileData = fs.readFileSync(`data.json`)
    //This code will fail because data.json doesnt exist. W/o the try catch, any code after this line would not execute
  }
  catch (e) {
    console.log(`An error occurred!`)
    console.log(e.message)
  }

  console.log(`Hi there`)
}

readFile()