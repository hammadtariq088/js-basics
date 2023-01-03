// Question - 5 (class)
// Create employee class with property name and cnic with default value.
// Create the get and set methods of employee class attributes.
// Create a printInfo method inside class which will print employee information.
// Create two instances of employee class with different names and cnic and call the printinfo
// method.

class Employee {
  constructor (name = 'Ali', cnic = 3410154874983) {
    this.name = name
    this.cnic = cnic
  }
  setName (updatedName) {
    return (this.name = updatedName)
  }
  getName () {
    return this.name
  }
  setCnic (updatedCnic) {
    return (this.cnic = updatedCnic)
  }
  getCnic () {
    return this.cnic
  }
  printInfo () {
    console.log(`Employee name : ${this.name} and Employee cnic : ${this.cnic}`)
  }
}

let instance1 = new Employee('Ahmed', 3510123965874)
let instance2 = new Employee('Zain', 3410164324567)
instance1.printInfo()
instance2.printInfo()
