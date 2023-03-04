//classes are templates for creating objects
//objects are instantiations of classes

class Job {
    //when a new Job object is created, the constructor func is used to build the necessary fields of that object using the 'this' keyword
    constructor(title,location, salary) {
        this.title = title;
        this.location = location;
        this.salary = salary;
    }
    //creating methods

    describe = () => {
        console.log(`I'm a ${this.title}. My job is ${this.location}, and I make ${this.salary}/yr.`)
    }
}

const developer = new Job(`Web Developer`, `Remote`, 100000)
console.log(developer)
//Using the 'new' keyword creates a new instance of the Job class based on the given parameters
developer.describe()