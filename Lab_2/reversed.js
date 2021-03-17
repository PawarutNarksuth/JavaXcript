function reverseString(value) {
    
    const reversedValue = value.split('').reverse().join('') 
    return reversedValue;
}

console.log(reverseString("Hello JavaScript"));


function reverseString(value) {
    let reversedValue = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    });

    return reversedValue;
}

console.log(reverseString("Hello JavaScript"));