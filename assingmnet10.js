console.log("Employee Playroll Generation Started...");

function checkStudentRecord() {
return new Promise((resolve) => {
setTimeout(() => {
console.log("Checking Employee Record...");
resolve();
}, 2000);
});
}

function calculateMarks() {
return new Promise((resolve) => {
setTimeout(() => {
console.log("Calculating Salary...");
resolve();
}, 2000);
});
}

function generateResult() {
return new Promise((resolve) => {
setTimeout(() => {
console.log("Generating Playroll...");
resolve();
}, 2000);
});
}

function resultGenerated() {
return new Promise((resolve) => {
setTimeout(() => {
console.log("Playroll Generated Successfully!");

console.log("\nEmployee Name: Sanchi");
console.log("Employee ID: EMP126");
console.log("Employee Salary: 40,000");
console.log("Bonus: 5,000");
console.log("Performance Rating: Excellent");

resolve();
}, 2000);
});
}

async function studentResultPortal() {
await checkStudentRecord();
await calculateMarks();
await generateResult();
await resultGenerated();
}

studentResultPortal();