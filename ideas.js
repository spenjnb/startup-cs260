const json = localStorage.getItem("form");
const obj = JSON.parse(json);

const div = document.createElement("div");
const span = document.createElement("span")

for (key in obj) {
    const markup = `<div>
    <span>${key}: ${obj[key]}</span>
    </div>`;
    document.getElementById('data').innerHTML += markup;
}

let objectArray = obj;
let userPreferecnes = new Array();

console.log(objectArray)

for (key in obj) {
    console.log(key);
    if (key !== "Username") {
        userPreferecnes.push(obj[key]);           
    }
}

for (let i = 0; i < userPreferecnes.length; ++i) {
    console.log(userPreferecnes[i]);
}

function chosenOptions(options) {
    let locationArray = ['I like the outdoors','I like staying Home','I like to go places'];
    let personalityArray = ['I like big groups','I want to go alone','I am looking for a date'];
    let activityArray = ['Parks, lakes, hikes','Movies, cooking, games','Try something new'];
    let timeArray = ['Morning','Afternoon','Evening'];
    let budgetArray = ['cheap','medium','expensive'];
    let packageResult = new Array();

    for (let i = 0; i < 3; ++i) {
        if (options[0] === locationArray[i]) {
            packageResult.push(i);
            console.log(i);
        }
    }

    for (let i = 0; i < 3; ++i) {
        if (options[1] === personalityArray[i]) {
            packageResult.push(i);
            console.log(i);
        }
    }

    for (let i = 0; i < 3; ++i) {
        if (options[2] === activityArray[i]) {
            packageResult.push(i);
            console.log(i);
        }
    }

    for (let i = 0; i < 3; ++i) {
        if (options[3] === timeArray[i]) {
            packageResult.push(i);
            console.log(i);
        }
    }

    for (let i = 0; i < 3; ++i) {
        if (options[4] === budgetArray[i]) {
            packageResult.push(i);
            console.log(i);
        }
    }
    return packageResult;
}

let preferences = chosenOptions(userPreferecnes);

for (let i = 0; i < preferences.length; ++i) {
    console.log(preferences[i]);
}

// funtion will implement main logic, it will give ideas based on user input
function suggestionNumberOne(userSelection) {

}
