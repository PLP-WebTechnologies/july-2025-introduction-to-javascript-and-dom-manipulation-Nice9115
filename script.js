// Variables

let school = "Bidii Academy";
console.log(school);

const startDate = "2013";
console.log(startDate);

let numberOfStudents = 500;
console.log(numberOfStudents);

// Data Types
let student = "Alice";
let age = 17;
let isEnrolled = true;
let studentRecord = null;
let graduationDate;
console.log(student, age, isEnrolled, studentRecord, graduationDate);

// Arrays
let subjects = ["Math", "Biology", "Physics"];
console.log(subjects[0]);

// Objects
let studentDetails = {
    name: "Alice",
    age: 17,
    isEnrolled: true,
    subjects: ["Math", "Biology", "Physics"]
};
console.log(studentDetails.isEnrolled);
console.log(studentDetails.subjects[1]);

// Operators
let math = 80;
let biology = 90;
let physics = 85;
let total = math + biology + physics;
console.log(total);

let average = total / 3;
console.log(average);

let isPassed = average >= 50;
console.log(isPassed);

// Functions
function greatStudent(name) {
    console.log("Congratulations " + name + " for your excellent performance!!");
}
greatStudent("Alice");

let newStudent = function (name, age) {
    console.log("Welcome " + name + " aged " + age + " has been enrolled successfully!");
};
newStudent("Angel", 16);

let welcome = (name) => {
    console.log("Welcome " + name + " to Bidii Academy!");
};
welcome("Angel");

// Parameters
function totalStudents(Grade3, Grade4, Grade5, Grade6) {
    let total = Grade3 + Grade4 + Grade5 + Grade6;
    return total;
}
let fullStudents = totalStudents(70, 60, 80, 50);
console.log(fullStudents);

// Conditionals
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}

// Loops
for (let i = 1; i <= 5; i++) {
    console.log("Student number " + i);
}

let count = 1;
while (count <= 5) {
    console.log("Counting student number " + count);
    count++; // moved inside loop
}

// DOM Manipulation
let change = function () {
    let title = document.getElementById("title");
    let intro = document.getElementById("Intro");
    let body = document.getElementById("body");
    let paragraph = document.getElementById("paragraph");

    // manipulation
    title.innerHTML = "Welcome to Bidii Academy";
    intro.style.color = "blue";
    body.style.backgroundColor = "LightGrey";
    intro.textContent = "Empowering Students for a Brighter Future";
    paragraph.style.fontSize = "20px";
    paragraph.style.color = "green";
    paragraph.textContent =
        "At Bidii Academy, we are committed to providing quality education and fostering a supportive learning environment for all our students.";

    // add new paragraph
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Join us today and be part of our vibrant learning community!";
    newParagraph.style.fontSize = "18px";
    newParagraph.style.color = "purple";
    body.appendChild(newParagraph);
};
