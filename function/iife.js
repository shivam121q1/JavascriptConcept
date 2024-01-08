//Immediately Invoked Function Expression
// we get problem from the global pollution so to stop this we use IIFE

(function shivam(){
    console.log("Hii")
})();
(function aurcode(){
    console.log("Hii")
})()
(()=>{
    console.log("Hii")
})();
((name)=>{
    console.log(`${name}`)
})(name)