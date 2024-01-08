function sayMyName(){
    console.log("Shivam Pal");
}
sayMyName();
function addTwoNumber(number1,number2){//parameters

   return number1+number2
}
const result = addTwoNumber(2,3)//arguments
console.log("result is :",result)

function loginUser(username){
    if(username === undefined){
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUser("hitesh"))
console.log(loginUser())
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600))
console.log(calculateCartPrice(200))