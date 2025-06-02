function numbers(a,b){
    const numbers = a + b;
    return numbers
}
numbers (1 ,3);
4
function numbers(a,b){
    const add = a + b;
    return add
}
numbers (1 ,3);
4
function numbers(a,b){
    const add = a + b;
    // return add;
}
numbers (1 ,3);
undefined
function numbers(a,b){
    const add = a + b;
    return add;
}
numbers (1 ,3);
4
function order ( type, size = "medium") {
    return order;
}
order ( "latte", "large");
// ƒ order ( type, size = "medium") {
//     return order;
// }
function order ( type, size = "medium") {
    return order;
}
order ( "latte", "large");
// ƒ order ( type, size = "medium") {
//     return order;
// }
function order ( type, size = "medium") {
    const order = def
    return order;
}
order ( "latte", "large");
// VM596:2 Uncaught ReferenceError: def is not defined
//     at order (<anonymous>:2:19)
//     at <anonymous>:5:1
// order @ VM596:2
// (anonymous) @ VM596:5Understand this error
// function order ( type, optionalWithDefault = "medium") {
//     // const order = 
//     return order;
// }
// order ( "latte", "large");
// ƒ order ( type, optionalWithDefault = "medium") {
//     // const order = 
//     return order;
// }
// function order ( type, optionalWithDefault = "medium") {
//     // const order = 
//     return order;
// }
// order ( "latte", "medium");
// ƒ order ( type, optionalWithDefault = "medium") {
//     // const order = 
//     return order;
// }
// function order ( type, size ) {
//     const order = size = "medium"
//     return order;
// }
// order ( "latte", "large");
// 'medium'
// function order ( type, size ) {
//     const order =[ type, size = "medium"]
//     return order;
// }
// order ( "latte", "large");
// (2) ['latte', 'medium']
// function order ( type, size ) {
//     const order = type, size = "medium"
//     return order;
// }
// order ( "latte", "large");
// VM687:2 Uncaught SyntaxError: Identifier 'size' has already been declaredUnderstand this error
// function order ( type, size ) {
//     const order = type, size 
//     return order;
// }
// order ( "latte", "large");
// VM690:2 Uncaught SyntaxError: Identifier 'size' has already been declaredUnderstand this error
// function order ( type, size ) {
//     const order = [type, size] 
//     return order;
// }
// order ( "latte", "large");
// (2) ['latte', 'large']
// function order ( type, size ) {
//     const order = [type, size= "medium"] 
//     return order;
// }
// order ( "latte", "large");
// (2) ['latte', 'medium']
// function order ( type, size ) {
//     const order = [type, defaultSize= "medium"] 
//     return order;
// }
// order ( "latte", "large");
// (2) ['latte', 'medium']
// function order ( type, size= "medium" ) {
//     const order = [type, size] 
//     return order;
// }
// order ( "latte", "large");
// (2) ['latte', 'large']
// function order ( type, size= "medium" ) {
//     const order = [type, size] 
//     return order;
// }
// order ( "latte");
// (2) ['latte', 'medium']
// function order ( type= "Black", size= "medium" ) {
//     const order = [type, size] 
//     return order;
// }
// order ();
// (2) ['Black', 'medium']


