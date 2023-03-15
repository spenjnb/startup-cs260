const json = localStorage.getItem("form");
const obj = JSON.parse(json);

const div = document.createElement("div");
const span = document.createElement("span")

let array;

for (key in obj) {
    const markup = `<div>
    <span>${key}: ${obj[key]}</span>
    </div>`;
    document.getElementById('data').innerHTML += markup;
}

let bestMatch = ['outdoor', 'Home', 'places'];
let option2 = ['groups', 'alone', 'date'];
let option3 = ['Parks', 'Movies', 'new'];
let preference = ['morning', 'afternoon', 'evening'];
let budget = ['cheap','medium', 'expensive'];

for (key in obj) {
    console.log(key);
    if (key == "Best Match") {
        bestMatch.find()
        console.log(obj[key]);
        
    }
}

