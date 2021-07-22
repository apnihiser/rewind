//Get the string from the page
//Controller Function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let stringValue = document.getElementById("userString").value;

    let revString = reverseString(stringValue);

    displayString(revString);
}

//Reverse string
//Logic Function
function reverseString(stringValue){

    let revString = [];

    //reverse a string using a for loop
    for (let i = stringValue.length - 1; i >= 0; i--){

        revString.push(stringValue[i]);

    }

    return revString.join('');

}

//Display reversed string
//View Function
function displayString(revString){

    //write to the page
    //Bad Method use template literal below: document.getElementById("msg").innerHTML = "Your string reversed is: " + revString;
    document.getElementById("msg").innerHTML = `Your string reversed is ${revString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}