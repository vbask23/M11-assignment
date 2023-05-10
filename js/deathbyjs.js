//STEP 1
// const sorter = (string) => {
//     string = string.split('').reverse().toString()
//     let x = string.replace(/\,/g,'')
//     console.log(x) 
// }
// sorter('webmaster')

//STEP 2
// const titler = (string) => {
//     let x = string.split(' ')
//     let z = ''
//     for(let i = 0; i <= x.length - 1; i++) {
//         z += ((( x[i].charAt(0)).toUpperCase()).concat(x[i].slice(1))) + ' '
//     }
//     console.log(z)
// }

// titler('the quick brown fox')

//STEP 3
// const vowelCounter = (string) => {
//     let vowels = string.match(/[a,e,i,o,u]/g)
//     console.log(vowels.length)
// }
// vowelCounter('The quick brown fox')


//STEP 4
// function randomId(){
//     let id = ""
//     let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"
//     for (let i = 0; i < 8; i++)
//         id += chars.charAt(Math.floor(Math.random() * chars.length))
//     return id
// }
// console.log(randomId())

//STEP 5
// function longestName(arr) {
//     let longest = ""
//         longest = arr[0]
//         for (let i = 1; i < arr.length; i++) {
//             if ( longest.length < arr[i].length ) {
//                 longest = arr[i]
//             }
//         }
//         return longest
//     }
  
// let countries = ["Australia", "Germany", "United States of America"]  
// console.log(longestName(countries))