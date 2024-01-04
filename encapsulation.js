/**
 * ! Private Properties
**/

// class Student {
//     constructor(name, dob){
//         this.name = name
//         this.dob = dob
//     }

// }

// let student1 = new Student("deb", 1926)
// console.log(student1)
// console.log(student1.name)
// console.log(student1.dob)

//Let's make the variables private

// class Student {
//     #dob
//     #name
//     constructor(name, dob){
//         this.#name = name
//         this.#dob = dob
//     }
//     getDob(){
//         return this.#dob
//     }

//     getName(){
//         return this.#name
//     }

//     getAge(){
//         return new Date().getFullYear() - this.#dob
//     }
// }

// let student2 = new Student("deb", 1926)
// console.log(student2)
// console.log(student2.getName())
// console.log(student2.getDob())
// console.log(student2.getAge())

/**
 * ! Private Methods
**/


class Student {
    #dob
    #name
    constructor(name, dob){
        this.#name = name
        this.#dob = dob
    }
    getDob(){
        return this.#dob
    }

    getName(){
        return this.#name
    }

    getAge(){
        return new Date().getFullYear() - this.#dob
    }

    #getInfo(){
        return `${this.getName()} was born in the year ${this.getDob()} and is now ${this.getAge()}.`
    }

    getPrivateInfo(){
        return this.#getInfo()
    }
}

const student3 = new Student("Pearline Molly Elizabeth Prentice", 1926)
console.log(student3.getDob())
console.log(student3.getName())
console.log(student3.getAge())
console.log(student3.getPrivateInfo())