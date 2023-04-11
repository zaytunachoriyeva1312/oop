// class Calc{
//     constructor(a,b){
//         this._a = a,
//         this._b = b
//     }
//     add = function(){
//         return this._a + this._b
//     }
//     subtract = function(){
//         return this._a - this._b
//     }
//     multiple = function(){
//         return this._a * this._b
//     }
    
// }
// const calc = new Calc(20,10)

// console.log(calc.add());
// console.log(calc.subtract());
// console.log(calc.multiple());


class jobs{
    constructor(name,type){
        this._name= name,
        this._type = type
    }
   name = function(){
       console.log("Job name: "+ this._name);
       
   }
}

let teacher = new jobs("teacher","higher education");
let cooker = new jobs("cooker","high school");
let president = new jobs("president","higher education");
let driver = new jobs("driver","high school");

teacher.name();
cooker.name();
president.name();
driver.name();


console.log(teacher);
console.log(cooker);
console.log(president);
console.log(driver);
