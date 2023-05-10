//STEP 1
// let name = prompt('Enter your name.')
// nameTrimmed = name.trim()
// nameTrimmed = name.replace(/\s/g,'')
// alert(`There are ${nameTrimmed.length} characters in ${name}.`)

//STEP 2
// let name = prompt('Enter your name.')
// nameTrimmed = name.trim()
// nameTrimmed = name.replace(/\s/g,'')
// let numRequest = prompt(`Enter a number between 1 and ${nameTrimmed.length} to see what letter corresponds to that.`)
// alert(`${numRequest} corresponds to letter ${nameTrimmed.charAt(numRequest-1)}`)

//STEP 3
// let firstName = prompt('Enter your first name:')
// firstName = firstName + ' '
// let lastName = prompt('Enter your last name:')
// alert(`Your name is: ${firstName.concat(lastName)}`)

//STEP 4
// let text = 'The quick brown fox jumps over the lazy dog'
// alert(`The index number of the word \'fox\' is ${text.indexOf('fox')}`)

//STEP 5
// let text = 'The quick brown fox jumps over the lazy fox'
// alert(`The second \'fox\' word has an index number of ${text.lastIndexOf('fox')}`)

//STEP 6
// let text = 'The quick brown fox jumps over the lazy dog'
// let name = prompt('Enter your full name:')
// alert(`${text.replace('the lazy dog', name)}`)

//STEP 7
// let text = 'The quick brown fox jumps over the lazy dog'
// let textSplit = text.split(' ')
// let found = false
// let word

// while(true) {
//     do {
//         word = prompt('Enter a word')
//     }
//     while (word.length === 0)
        
//     for (let i=0; i <= textSplit.length; i++) {
//         if (word === textSplit[i]) {
//             alert(`The word ${word} is present in the text`) 
//             found = true
//             break
//         } else {
//             continue
//         }
//     }

//     if(found === false) {
//         alert(`Your word ${word} does not exist in the text`)
//     }
// }

//STEP 8
// let old_string = 'The quick brown fox jumps over the lazy dog'
// console.log(old_string.search('the'))
// let new_string = old_string.substring(31)
// alert(`${new_string.toUpperCase()}`)

//STEP 9
// let text = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG  '
// alert(`${text.trim().toLowerCase()}`)

//STEP 10
// let text = 'the quick brown fox jumps over the lazy dog'
// alert(`${(text.charAt(0).toUpperCase()).concat(text.substring(1))}`)