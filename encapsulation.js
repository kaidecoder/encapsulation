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
//     get getDob(){
//         return this.#dob
//     }

//     get getName(){
//         return this.#name
//     }

//     get getAge(){
//         return new Date().getFullYear() - this.#dob
//     }
// }

// let student2 = new Student("deb", 1926)
// console.log(student2)
// console.log(student2.getName)
// console.log(student2.getDob)
// console.log(student2.getAge)

// /**
//  * ! Private Methods
// **/


// class Student {
//     #dob
//     #name
//     constructor(name, dob){
//         this.#name = name
//         this.#dob = dob
//     }
//     get getDob(){
//         return this.#dob
//     }

//     get getName(){
//         return this.#name
//     }

//     get getAge(){
//         return new Date().getFullYear() - this.#dob
//     }

//     #getInfo(){
//         return `${this.getName} was born in the year ${this.getDob} and is now ${this.getAge} years old.`
//     }

//     get getPrivateInfo(){
//         return this.#getInfo()
//     }
// }

// const student3 = new Student("Pearline Molly Elizabeth Prentice", 1926)
// console.log(student3.getDob)
// console.log(student3.getName)
// console.log(student3.getAge)
// console.log(student3.getPrivateInfo)

// /**
//  * ! Add some inheritance to the Encapsulation
// **/

class Person {
    #name
    #age 
    #address 
    constructor(name, age, address){
        this.#name = name
        this.#age = age 
        this.#address = address
    }
    get getName(){
        return this.#name
    }
    get getAge(){
        return this.#age
    }
    get getAddress(){
        return this.#address
    }
   
}

class Teacher extends Person{
    constructor(name, age, address, teacher_id){
        super(name, age, address)
        this.teacher_id = teacher_id
    }
    #getSalary(){
        return 15000
    }
    get getPrivateSalary(){
        return this.#getSalary()
    }

    get getNewName(){
        return `Welcome ${this.getName}`
    }
    #getTeacherInfo(){
        return `${this.getNewName} is now ${this.getAge} years old, and lives at ${this.getAddress}.`
   }
   get getTeacherInfo(){
       return this.#getTeacherInfo()
   }

}

let teacher1 = new Teacher("Deb Prentice", 21, "26 Nonya Lane", 1256)
console.log("Name:", teacher1.getNewName)
console.log("age:", teacher1.getAge)
console.log("address:", teacher1.getAddress)
console.log("salary:", teacher1.getPrivateSalary)
console.log("info:", teacher1.getTeacherInfo)
console.log("id:", teacher1.teacher_id)

//Note:  name, age, address are private to Person, so must use a getter

//Problem:  what if you want to define your own getName function in the child class?  You would call the function by a different name, then include the original getter name inside 