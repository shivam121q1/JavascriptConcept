//this keyword create context
const user ={
    username: "Shivam",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this)
    }
}
// user.welcomeMessage();
// user.username ="sam"
// user.welcomeMessage()
// console.log(this)

// function fav(){
//     console.log(this)
// }
// fav()

// const fav = function(){
//     let username = "shivam"
//     console.log(this.username)
// }
// fav()

// const fav = ()=>{
//     let username ="shivam"
//     console.log(this.username)
// }
// fav()

// const add = (num1,num2)=>{
//     return num1+ num2
// }
const add =(num1,num2)=> num1+num2