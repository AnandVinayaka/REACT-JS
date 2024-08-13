// const myPromise = new Promise((resolve,reject) => {
//     let user;
//     if(user){
//         resolve(`User is Available`)
//     }
//     else{
//         reject(`User is Not available`)
//     }
// });

// myPromise.then((response)=>console.log(response)).catch((error)=>console.log(error))

////////

// function FuncOne(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(value)
//             resolve()
//         },3000)
//     })
// }
// function FuncTwo(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(value)
//             resolve()
//         },2000)
//     })
// }
// function FuncThree(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(value)
//             resolve()
//         },3000)
//     })
// }

// FuncOne(1).then((response)=>{FuncTwo(2)}).then((response)=>{FuncThree(3)})

////////

// function getData(){
//     const xhr=new XMLHttpRequest()
//     xhr.open("GET","https://jsonplaceholder.typicode.com/todos")
//     xhr.responseType="json"
//     xhr.onload=function(){
//         console.log(xhr.response)
//     }
//     xhr.onerror=function(){
//         console.log("error")
//     }
//     xhr.send()
// }
// getData()


function getData() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
        xhr.responseType = "json";
        
        xhr.onload = function() {
            if (xhr.status >= 2000 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error("Error"));
            }
        };
        
        xhr.onerror = function() {
            reject(new Error("error"));
        };
        
        xhr.send();
    });
}

getData()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });
