//STEP 1
// let monthDays
// let monthYear1
// let x
// let y
// while(true) {
//     let monthYear = prompt('Enter the  month in numerals EX: February = 2 \nor the month and the year EX: XXXX EX: February 2016 = 2/2016 ')
//     monthYear = monthYear.replace(/\//g,' ')
//     monthYear1 = monthYear.split(' ')
//     x = parseInt(monthYear1[0])
//     y = parseInt(monthYear1[1])
//     if(isNaN(x) ) {
//         console.log('Please enter numbers')
//     } else if (x > 12) {
//         console.log('Please enter the corresponding number for the month')
//     } else {
//         break
//     }
// }   

// if (monthYear1.length === 2) {
//     monthDays = new Date(y, x)  
// } else if(monthYear1.length === 1) {
//     monthDays = new Date(2023, x)   
// }
// monthDays.setDate(monthDays.getDate() - 1)
// let days = monthDays.toString().split(' ')

// if (monthYear1.length === 2) {
//     console.log(`There are ${days[2]} days in the month of ${days[1]}, ${days[3]}`)
// } else if(monthYear1.length === 1) {
//     console.log(`There are ${days[2]} days in the month of ${days[1]}`)
// }

//STEP 2
// let d = new Date()
// let month = (d.getMonth() + 1).toString()
// let monthArray = [['1', 'January'],['2', 'February'], ['3', 'March'],['4', 'April'], ['5', 'May'], ['6', 'June'], ['7', 'July'], ['8', 'August'], ['9', 'September'], ['10', 'October'], ['11', 'November'], ['12', 'December']]
// for(let i = 0; i <= monthArray.length -1; i++) {
//     if(monthArray[i][0] === month) {
//     console.log(`It is the month of ${monthArray[i][1]}`)
//     break

//     }
// }

//STEP 3
// let d = new Date()
// let day = d.getDay().toString()
// let dayArray = [['0', 'Sunday'],['1', 'Monday'], ['2', 'Tuesday'],['3', 'Wednesday'], ['4', 'Thursday'], ['5', 'Friday'], ['6', 'Saturday']]
// for(let i = 0; i <= dayArray.length; i++) {
//     if(dayArray[i][0] === day) {
//         if(dayArray[i][0] === '0' || dayArray[i][0]=== '5' || dayArray[i][0] === '6') {
//             console.log(`It is the weekend. It is ${dayArray[i][1]}.`)     
//         }else {
//             console.log(`It is a weekday. It is ${dayArray[i][1]}`)
//         }
//     }
// }

//STEP 4
// let d = new Date()
// let dayToday = (d.getDay() - 1).toString()
// let dayArray = [['0', 'Sunday'],['1', 'Monday'], ['2', 'Tuesday'],['3', 'Wednesday'], ['4', 'Thursday'], ['5', 'Friday'], ['6', 'Saturday']]
// for(let i = 0; i <= dayArray.length; i++) {
//         if(dayArray[i][0] === dayToday) {
//             console.log(`Yesterday was ${dayArray[i][1]}.`)               
//         }
//     }

//STEP 5
// let d = new Date(2023, 4, 10)
// let day = d.toString()
// console.log(day.slice(0,1))


