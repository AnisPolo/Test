"use strict";

let students = [];

window.onload = () => {
    const stored = localStorage.getItem("students");
    if (stored) {
        students = JSON.parse(stored);
        displayStudents();
        updateAverage();
    }
}

const addStudent = () => {
  //value toma texto
  //trim() quita espacios en blanco
  const name = document.getElementById("nameInput").value.trim();

  if (name === "" || !isNaN(name)) {
    alert("Please enter a valid name.");
    return;
  }

  //type of, checa el tipo de dato

  const grade = parseFloat(document.getElementById("gradeInput").value);

  if (grade < 0 || grade > 100) {
    alert("Please enter a valid grade.");
    return;
  }

  const status = grade >= 70 ? "passed" : "failed";

  const student = {
    name: name,
    grade: grade,
    status: status,
  };

  //push agrega un elemento al final del array
  // pop quita el ultimo elemento del array

  students.push(student);
  displayStudents();
  calculateAverage();
  updateAverage();
  saveToLocalStorage();
  console.log(students);
};

const displayStudents = () => {
  const list = document.getElementById("studentList");
  list.innerHTML = ``;

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");

    li.innerHTML = `
<p class=${students[i].status}>${students[i].name} - ${students[i].grade} - ${students[i].status}</p>
`;
    list.appendChild(li);
    console.log(students[i].status);
  }
};

const calculateAverage = () => {
    if (students.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < students.length; i++) {
        total += students[i].grade;
    }

    let average = total / students.length;
    return average;
};

const updateAverage = () => {
    document.getElementById("averageDisplay").textContent = `Average grade: ${calculateAverage()}`;
}

const saveToLocalStorage = () => {
    localStorage.setItem("students", JSON.stringify(students));
};

const clearLocalStorage = () => {
    const ok = confirm("Are you sure you want to clear localStorage?");
    if (!ok) return;
    localStorage.removeItem("students");
    students = [];
    displayStudents();
    updateAverage();
    saveToLocalStorage();
}

const seedDemo = () => {
    students = [
        { name: "John", grade: 85, status: "passed" },
        { name: "Jane", grade: 72, status: "failed" },
        { name: "Bob", grade: 90, status: "passed" },
        { name: "Alice", grade: 65, status: "failed" },
    ];
    displayStudents();
    updateAverage();
    saveToLocalStorage();
}