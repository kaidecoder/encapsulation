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

//     #getInfo(){
//         return `${this.getName()} was born in the year ${this.getDob()} and is now ${this.getAge()} years old.`
//     }

//     getPrivateInfo(){
//         return this.#getInfo()
//     }
// }

// const student3 = new Student("Pearline Molly Elizabeth Prentice", 1926)
// console.log(student3.getDob())
// console.log(student3.getName())
// console.log(student3.getAge())
// console.log(student3.getPrivateInfo())

/**
 * ! Add some inheritance to the Encapsulation
**/

class Person {
    #name
    #age 
    #address 
    constructor(name, age, address){
        this.#name = name
        this.#age = age 
        this.#address = address
    }
    getName(){
        return this.#name
    }
    getAge(){
        return this.#age
    }
    getAddress(){
        return this.#address
    }
    
}

class Teacher extends Person{
    constructor(name, age, address, teacher_id){
        super(name, age, address)
        this.teacher_id = teacher_id
    }
    #getSalary(){
        return "get salary"
    }
    // getName(){
    //     return `Welcome ${this.getName()}`
    // }
}

let teacher1 = new Teacher("Teacher", 21, "26 Nonya Lane", 1256)
console.log(teacher1.getName())
console.log(teacher1.getAge())
console.log(teacher1.getAddress())
console.log(teacher1.teacher_id)

//Note:  name, age, address are private to Person, so must use a getter
