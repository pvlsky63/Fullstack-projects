/*
  # Rules:
    - Minimun lenght should be 8 characters
    - Atleast one lowercase character
    - Atleast one uppercase character
    - Atleast one special character ($, @, #)
    - Atleast one number

    - Additional rules:
        - Should not contain name
        - Should not contain email
        - Should not be any of these simple password (user123, admin123, password123, etc.)

  # Category:
    - Strong
    - Medium
    - Weak
*/

function validatePassword(pwd) {
    // Check: Password is empty or null
    if(!pwd) {
        console.log('Invalid password! Please enter a valid password')
        return
    }

    // Check: 1. Minimum lenght should be 8 characters
    if(pwd.length >= 8) {
            console.log("Minimum 8 characters ✅")
        } else {
            console.log("Minimum 8 characters ⚠️")
        }

    // Check: 2. Atleast one lowercase character
    // a. Iterate through each character of the password string
    hasLowercaseChar = true
    hasUppercaseChar = true
    
    for(let i = 0; i < pwd.length; i++) {
        let char = pwd[i]
        if(char >= 'a' && char <= 'z') {
            hasLowercaseChar = true
        }
    }

    if(hasLowercaseChar){
        console.log("Atleast one lowercase character ✅")
    } else {
        console.log("Atleast one lowercase character ⚠️")
    }

    if(hasUppercaseChar){
        console.log("Atleast one Uppercase character ✅")
    } else {
        console.log("Atleast one Uppercase character ⚠️")
    }

    // b. check

    // Check: 5. Atleast one number
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    // a. Iterate through each character of the password string
    let containsDigit = false
    for(let i = 0; i < pwd.length; i++) {
        // b. Check whether the character is = any of the characters in digits
        if(digits.includes(pwd[i])) {
            console.log("Atleast one number ✅")
            break
        }
    }
    if(!containsDigit) {
        console.log("Atleast one number ⚠️")
    }
}

const inputPassword = prompt("Enter your password")
console.log(inputPassword)

validatePassword(inputPassword)