// console.log("promises");

// syntax fro promise 1 where we are declearing a variable and assign the promise here
// const promiseOne = new Promise(function(resolve,reject){
//     // Do an Async task:-> DB Call, Cryptography,Network Call
//     setTimeout(function(){
//         console.log("Async Task is Complete");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })


// 2nd syntax of promise where directly we are creating a promise and with that attaching resolved (.then).

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise in 2nd time");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Now i am under resolve without variable");
// })


// 3rd syntax of promise and resolved or .then() function

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"arka",email:"arka@gmail.com",})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



// promise 4 syntax 

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;

//         if(!error){
//             resolve({username:"arka",password:"arka123"})
//         }
//         else{
//             reject('Error: Something Went Wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;  // extracting the user name from here 
// }).then((username)=>{
//     console.log(username);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Finally Done either it resolved or rejected")
// })

// Promise syntax - 5->

//  const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//                 let error = false;
        
//                 if(!error){
//                     resolve({username:"javascript",password:"19837"})
//                 }
//                 else{
//                     reject('Error: JS Went Wrong')
//                 }
//             },1000)
    
//  })

// async function consumedPromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// consumedPromiseFive()


// fetch user through API in JS

// async function getAllUsers(){
//     try {
//         const res = await fetch('https://api.github.com/users/arkamukherjee')
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()


// anpother syntax to get user data
fetch('https://api.github.com/users/arkamukherjee').then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})

